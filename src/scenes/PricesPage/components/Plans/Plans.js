import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Waypoint } from 'react-waypoint';
import classnames from 'classnames';

import Bar from './components/Bar';
import PeriodSwitcher from './components/PeriodSwitcher';
import PlanSwitcher from './components/PlanSwitcher';
import Dashboard from './components/Dashboard';
import { useScrollDirection } from '@hooks';
import style from './Plans.module.scss';

const OPERATION = {
  REMOVE: 'remove',
  ADD: 'add',
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
  const [selectedPlansIndexes, setSelectedPlansIndexes] = useState([0]);
  const [lastChanged, setLastChanged] = useState();
  const selectedPlan = fields[selectedPlansIndexes];
  const [selectedPlans, setSelectedPlans] = useState();

  const togglePeriod = () => setIsAnnual((state) => !state);
  const selectPlan = (index) => {
    const planIndex = selectedPlansIndexes.indexOf(index);

    if (planIndex === -1) {
      setSelectedPlansIndexes([...selectedPlansIndexes, index]);
      setLastChanged({ index, operation: OPERATION.ADD });
    }

    if (planIndex >= 0) {
      setSelectedPlansIndexes(
        selectedPlansIndexes.filter((item) => item !== index)
      );
      setLastChanged({ index, operation: OPERATION.REMOVE });
    }
  };

  useEffect(() => {
    if (selectedPlansIndexes.length === 0) {
      setSelectedPlansIndexes([0]);
    }

    if (
      selectedPlansIndexes.includes(0) &&
      selectedPlansIndexes.includes(1) &&
      selectedPlansIndexes.includes(2) &&
      !selectedPlansIndexes.includes(3) &&
      lastChanged.index !== 3
    ) {
      setSelectedPlansIndexes([0, 1, 2, 3]);
    }

    if (
      (!selectedPlansIndexes.includes(0) ||
        !selectedPlansIndexes.includes(1) ||
        !selectedPlansIndexes.includes(2)) &&
      selectedPlansIndexes.includes(3) &&
      lastChanged.index !== 3
    ) {
      setSelectedPlansIndexes(
        selectedPlansIndexes.filter((item) => item !== 3)
      );
    }

    if (
      lastChanged.index === 3 &&
      lastChanged.operation === OPERATION.REMOVE &&
      selectedPlansIndexes[0] === 0 &&
      selectedPlansIndexes.length !== 1
    ) {
      setSelectedPlansIndexes([0]);
    }

    if (
      lastChanged.index === 3 &&
      lastChanged.operation === OPERATION.ADD &&
      selectedPlansIndexes.length !== 4
    ) {
      setSelectedPlansIndexes([0, 1, 2, 3]);
    }

    let plansSelected = [];

    for (let i = 0; i < selectedPlansIndexes.length; i++) {
      plansSelected.push(fields[i]);
    }

    setSelectedPlans(plansSelected);
  }, [selectedPlansIndexes]);

  return (
    <Waypoint onEnter={hideBar} onLeave={showBar}>
      <div className={style.wrapper}>
        <div
          className={classnames(style.bar, {
            [style.disabled]: !isBarShowing || scrollDirection === 'up',
          })}
        >
          <Bar primary={primary} plan={selectedPlan} isAnnual={isAnnual} />
        </div>
        <div className={style.container}>
          <div className={style.header}>
            <PeriodSwitcher isAnnual={isAnnual} togglePeriod={togglePeriod} />
          </div>
          <div className={style.body}>
            <div className={style.sidebar}>
              <PlanSwitcher
                plans={fields}
                currentIndexes={selectedPlansIndexes}
                onSelect={selectPlan}
              />
            </div>
            <div className={style.main}>
              <Dashboard
                primary={primary}
                plan={selectedPlans}
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
