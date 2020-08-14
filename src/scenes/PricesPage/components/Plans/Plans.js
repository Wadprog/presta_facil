import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Waypoint } from 'react-waypoint';
import classnames from 'classnames';

import Bar from './components/Bar';
import PeriodSwitcher from './components/PeriodSwitcher';
import PlanSwitcher from './components/PlanSwitcher';
import Dashboard from './components/Dashboard';
import { useScrollDirection } from '@hooks';
import style from './Plans.module.scss';

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
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
  const selectedPlan = fields[selectedPlanIndex];

  const togglePeriod = () => setIsAnnual((state) => !state);
  const selectPlan = (index) => setSelectedPlanIndex(index);

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
                currentIndex={selectedPlanIndex}
                onSelect={selectPlan}
              />
            </div>
            <div className={style.main}>
              <Dashboard
                primary={primary}
                plan={selectedPlan}
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
