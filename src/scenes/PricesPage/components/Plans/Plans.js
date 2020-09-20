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
  wordwide: 'Worldwide',
};

const OPERATION = {
  add: 'add',
  remove: 'remove',
  setDefault: 'setDefault',
  setAll: 'setAll',
};

const BASIC_COST = {
  basicplanannualcost: 'basicplanannualcost',
  basicplanmonthlycost: 'basicplanmonthlycost',
};

const PREMIUM_COST = {
  premiumplanannualcost: 'premiumplanannualcost',
  premiumplanmonthlycost: 'premiumplanmonthlycost',
};

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
        operation: OPERATION.add,
      });
    }

    if (planIndex >= 0) {
      setSelectedPlans(selectedPlans.filter((_, index) => index !== planIndex));
      setLastChange({
        name: RichText.asText(fields[index].name),
        operation: OPERATION.remove,
      });
    }
  };

  const plansTotalCost = (selectedPlans, field) => {
    let totalCost = 0;

    for (let i = 0; i < selectedPlans.length; i++) {
      if (RichText.asText(selectedPlans[i].name) === PLANS.wordwide) {
        return selectedPlans[i][field];
      }

      totalCost += selectedPlans[i][field];
    }

    return totalCost;
  };

  const selectedPlansNames = (plans) => {
    if (plans.some(({ name }) => RichText.asText(name) === PLANS.wordwide)) {
      return PLANS.wordwide;
    }

    let plansListNames = [];

    plans.forEach(({ name }) => {
      plansListNames.push(RichText.asText(name));
    });

    return plansListNames.join(', ');
  };

  const basicCost = isAnnual
    ? plansTotalCost(selectedPlans, BASIC_COST.basicplanannualcost)
    : plansTotalCost(selectedPlans, BASIC_COST.basicplanmonthlycost);
  const premiumCost = isAnnual
    ? plansTotalCost(selectedPlans, PREMIUM_COST.premiumplanannualcost)
    : plansTotalCost(selectedPlans, PREMIUM_COST.premiumplanmonthlycost);

  const validation = () => {
    if (selectedPlans.length === 0) {
      setSelectedPlans(defaultSelectedPlan);
      setLastChange({
        name: null,
        operation: OPERATION.setDefault,
      });
    } else if (
      lastChange.name === PLANS.wordwide &&
      lastChange.operation === OPERATION.add &&
      lastChange.operation !== OPERATION.setAll
    ) {
      setSelectedPlans(fields);
      setLastChange({
        name: PLANS.wordwide,
        operation: OPERATION.setAll,
      });
    } else if (
      lastChange.name === PLANS.wordwide &&
      lastChange.operation === OPERATION.remove &&
      lastChange.operation !== OPERATION.setDefault
    ) {
      setSelectedPlans(defaultSelectedPlan);
      setLastChange({
        name: PLANS.wordwide,
        operation: OPERATION.setDefault,
      });
    } else if (
      selectedPlans.length === 3 &&
      !isPlanIncluded(selectedPlans, PLANS.wordwide)
    ) {
      setSelectedPlans(fields);
      setLastChange({
        name: null,
        operation: OPERATION.setAll,
      });
    } else if (
      isPlanIncluded(selectedPlans, PLANS.wordwide) &&
      selectedPlans.length !== 4
    ) {
      setSelectedPlans(
        selectedPlans.filter(
          ({ name }) => RichText.asText(name) !== PLANS.wordwide
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
          />
        </div>
        <div className={style.container}>
          <div className={style.header}>
            <PeriodSwitcher isAnnual={isAnnual} togglePeriod={togglePeriod} />
          </div>
          <div className={style.body}>
            <div className={style.sidebar}>
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
