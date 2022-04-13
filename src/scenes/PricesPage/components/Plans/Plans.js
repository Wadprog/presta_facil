import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Waypoint } from 'react-waypoint';
import { RichText } from 'prismic-reactjs';
import classnames from 'classnames';

import Bar from './components/Bar';
import PeriodSwitcher from './components/PeriodSwitcher';
import PlanSwitcher from './components/PlanSwitcher';
import Dashboard from './components/Dashboard';
import { useScrollDirection } from '@hooks';
import style from './Plans.module.scss';

const PLANS = {
  WORLDWIDE: 'Worldwide',
  GDPR: 'GDPR/ePrivacy',
  CCPA: 'CCPA',
  LGPD: 'LGPD',
};

const CURRENCY = {
  USD: 'usd',
  EUR: 'eur',
};

const OPERATION = {
  ADD: 'add',
  REMOVE: 'remove',
  SET_DEFAULT: 'setDefault',
  SET_ALL: 'setAll',
};

const BASIC_COST = {
  BASIC_PLAN_ANNUAL_COST: 'basicplanannualcost',
  BASIC_PLAN_MONTHLY_COST: 'basicplanmonthlycost',
};

const PREMIUM_COST = {
  PREMIUM_PLAN_ANNUAL_COST: 'premiumplanannualcost',
  PREMIUM_PLAN_MONTHLY_COST: 'premiumplanmonthlycost',
};

const DISCOUNTS = [
  {
    plans: [PLANS.GDPR, PLANS.CCPA],
    prices: {
      [BASIC_COST.BASIC_PLAN_MONTHLY_COST]: 20,
      [BASIC_COST.BASIC_PLAN_ANNUAL_COST]: 200,
      [PREMIUM_COST.PREMIUM_PLAN_MONTHLY_COST]: 30,
      [PREMIUM_COST.PREMIUM_PLAN_ANNUAL_COST]: 300,
    },
  },
];

const Plans = ({
  primary,
  fields,
  isPremium,
  setIsPremium,
  isBarShowing,
  showBar,
  hideBar,
}) => {
  const scrollDirection = useScrollDirection();
  const [isAnnual, setIsAnnual] = useState(false);
  const defaultSelectedPlan = [fields[0]];
  const [selectedPlans, setSelectedPlans] = useState(defaultSelectedPlan);
  const [lastChange, setLastChange] = useState({});
  const [currency, setCurrency] = useState(CURRENCY.EUR);
  const togglePeriod = () => setIsAnnual((state) => !state);

  const isPlanIncluded = (selectedPlans, fieldName) => {
    return selectedPlans.some(
      ({ name }) => RichText.asText(name) === fieldName
    );
  };

  const selectPlan = (index) => {
    const planIndex = selectedPlans.indexOf(fields[index]);

    if (planIndex === -1) {
      setSelectedPlans([...selectedPlans, fields[index]]);
      setLastChange({
        name: RichText.asText(fields[index].name),
        operation: OPERATION.ADD,
      });
    }

    if (planIndex >= 0) {
      setSelectedPlans(selectedPlans.filter((_, index) => index !== planIndex));
      setLastChange({
        name: RichText.asText(fields[index].name),
        operation: OPERATION.REMOVE,
      });
    }
  };

  const plansTotalCost = (selectedPlans, field) => {
    let totalCost = 0;

    for (let i = 0; i < selectedPlans.length; i++) {
      if (RichText.asText(selectedPlans[i].name) === PLANS.WORLDWIDE) {
        return selectedPlans[i][field];
      }
      totalCost += selectedPlans[i][field];
    }

    if (DISCOUNTS && DISCOUNTS.length > 0) {
      DISCOUNTS.forEach(({ plans, prices }) => {
        if (
          plans.every((plan) => isPlanIncluded(selectedPlans, plan)) &&
          plans.length === selectedPlans.length
        ) {
          totalCost = prices[field];
        }
      });
    }

    return totalCost;
  };

  const selectedPlansNames = (plans) => {
    if (plans.some(({ name }) => RichText.asText(name) === PLANS.WORLDWIDE)) {
      return PLANS.WORLDWIDE;
    }

    let plansListNames = [];

    plans.forEach(({ name }) => {
      plansListNames.push(RichText.asText(name));
    });

    return plansListNames.join(', ');
  };

  const basicCost = isAnnual
    ? plansTotalCost(selectedPlans, BASIC_COST.BASIC_PLAN_ANNUAL_COST)
    : plansTotalCost(selectedPlans, BASIC_COST.BASIC_PLAN_MONTHLY_COST);
  const premiumCost = isAnnual
    ? plansTotalCost(selectedPlans, PREMIUM_COST.PREMIUM_PLAN_ANNUAL_COST)
    : plansTotalCost(selectedPlans, PREMIUM_COST.PREMIUM_PLAN_MONTHLY_COST);

  const validation = () => {
    if (
      selectedPlans.length === 1 &&
      isPlanIncluded(selectedPlans, PLANS.GDPR) &&
      currency !== CURRENCY.EUR
    ) {
      setCurrency(CURRENCY.EUR);
    } else if (selectedPlans.length > 1 && currency !== CURRENCY.USD) {
      setCurrency(CURRENCY.USD);
    }

    if (selectedPlans.length === 0) {
      setSelectedPlans(defaultSelectedPlan);
      setLastChange({
        name: null,
        operation: OPERATION.SET_DEFAULT,
      });
    } else if (
      lastChange.name === PLANS.WORLDWIDE &&
      lastChange.operation === OPERATION.ADD &&
      lastChange.operation !== OPERATION.SET_ALL
    ) {
      setSelectedPlans(fields);
      setLastChange({
        name: PLANS.WORLDWIDE,
        operation: OPERATION.SET_ALL,
      });
    } else if (
      lastChange.name === PLANS.WORLDWIDE &&
      lastChange.operation === OPERATION.REMOVE &&
      lastChange.operation !== OPERATION.SET_DEFAULT
    ) {
      setSelectedPlans(defaultSelectedPlan);
      setLastChange({
        name: PLANS.WORLDWIDE,
        operation: OPERATION.SET_DEFAULT,
      });
    } else if (
      selectedPlans.length === 3 &&
      !isPlanIncluded(selectedPlans, PLANS.WORLDWIDE)
    ) {
      setSelectedPlans(fields);
      setLastChange({
        name: null,
        operation: OPERATION.SET_ALL,
      });
    } else if (
      isPlanIncluded(selectedPlans, PLANS.WORLDWIDE) &&
      selectedPlans.length !== 4
    ) {
      setSelectedPlans(
        selectedPlans.filter(
          ({ name }) => RichText.asText(name) !== PLANS.WORLDWIDE
        )
      );
    }
  };

  validation();

  return (
    <Waypoint onEnter={hideBar} onLeave={showBar}>
      <div className={style.wrapper}>
        <div
          className={classnames(style.bar, {
            [style.disabled]: !isBarShowing || scrollDirection === 'up',
          })}
        >
          <Bar
            primary={primary}
            plans={selectedPlans}
            selectedPlansNames={selectedPlansNames(selectedPlans)}
            basicCost={basicCost}
            premiumCost={premiumCost}
            isAnnual={isAnnual}
            currency={currency}
          />
        </div>
        <div className={style.container}>
          <div className={style.body}>
            <div className={style.sidebar}>
              <div className={style.header}>
                <PeriodSwitcher
                  isAnnual={isAnnual}
                  togglePeriod={togglePeriod}
                />
              </div>
              <PlanSwitcher
                plans={fields}
                selectedPlans={selectedPlans}
                onSelect={selectPlan}
              />
            </div>
            <div className={style.main}>
              <Dashboard
                primary={primary}
                selectedPlansNames={selectedPlansNames(selectedPlans)}
                plans={selectedPlans}
                basicCost={basicCost}
                premiumCost={premiumCost}
                isAnnual={isAnnual}
                isPremium={isPremium}
                setIsPremium={setIsPremium}
                currency={currency}
              />
            </div>
          </div>
        </div>
      </div>
    </Waypoint>
  );
};

Plans.propTypes = {
  primary: PropTypes.object.isRequired,
  fields: PropTypes.array.isRequired,
  isBarShowing: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
  setIsPremium: PropTypes.func.isRequired,
  showBar: PropTypes.func.isRequired,
  hideBar: PropTypes.func.isRequired,
};

export default Plans;
