import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Waypoint } from 'react-waypoint';
import classnames from 'classnames';

import Dashboard from './components/Dashboard';
import StatusBar from './components/StatusBar';
import PeriodSwitcher from './components/PeriodSwitcher';
import PlanSwitcher from './components/PlanSwitcher';
import { useBreakpoints } from '@hooks';
import style from './Packages.module.scss';

const MOBILE_VIEW = 1220;
const CARDS_LIST_WIDTH = 920;
const CARDS_NUMBER = 4;

const Packages = ({
  primary,
  fields,
  isBarShowing,
  showBar,
  hideBar,
  currency,
  activepoint,
  scrollableRef,
  setActiveOnClick,
  setActive,
}) => {
  console.log(primary, fields)
  // const [isAnnual, setIsAnnual] = useState(false);
  // const [selectedPlansIndexes, setSelectedPlansIndexes] = useState([0]);
  // const [selectedPlans, setSelectedPlans] = useState([fields[0].name[0].text]);
  // const [basicCost, setBasicCost] = useState(fields[0].basicplanmonthlycost);
  // const [plusCost, setPlusCost] = useState(fields[0].plusplanmonthlycost);
  // const [businessCost, setBusinessCost] = useState(
  //   fields[0].businessplanmonthlycost
  // );
  // const [isStatusBarVisible, setIsStatusBarVisible] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);
  // const { width } = useBreakpoints();

  // useEffect(() => {
  //   const mobile = width < MOBILE_VIEW;
  //   setIsStatusBarVisible(width < CARDS_LIST_WIDTH);
  //   setIsMobile(mobile);
  // }, [width]);

  // const selectPlan = (value) => {
  //   const isSelected = selectedPlansIndexes.includes(value);
  //   let indexes;
  //   if (isSelected) {
  //     indexes =
  //       selectedPlansIndexes.length === 1
  //         ? [0]
  //         : selectedPlansIndexes.filter((item) => item !== value);
  //   } else {
  //     indexes = [...selectedPlansIndexes, value].sort((a, b) => a - b);
  //   }
  //   setSelectedPlansIndexes(indexes);
  //   const plans = indexes.map((index) => fields[index].name[0].text);
  //   setSelectedPlans(plans);
  //   let basicPrice = 0;
  //   let plusPrice = 0;
  //   let businessPrice = 0;
  //   indexes.forEach((item, index) => {
  //     let coefficient;
  //     switch (index) {
  //       case 0:
  //         coefficient = 0;
  //         break;
  //       case 1:
  //         coefficient = primary.seconditemdiscount / 100;
  //         break;
  //       case 2:
  //         coefficient = primary.thirditemdiscount / 100;
  //         break;
  //     }
  //     basicPrice += fields[item].basicplanmonthlycost * (1 - coefficient);
  //     plusPrice += fields[item].plusplanmonthlycost * (1 - coefficient);
  //     businessPrice += fields[item].businessplanmonthlycost * (1 - coefficient);
  //   });
  //   setBasicCost(Math.ceil(basicPrice));
  //   setPlusCost(Math.ceil(plusPrice));
  //   setBusinessCost(Math.ceil(businessPrice));
  // };

  // const togglePeriod = () => {
  //   setIsAnnual(!isAnnual);
  // };

  return (
    <Waypoint onEnter={hideBar} onLeave={showBar}>
      {/* <div
        className={classnames({
          [style.wrapper]: !isMobile,
          [style.wrappermobile]: isMobile,
        })}
      >
        <div className={style.container}>
          <div className={style.header}>
            <PeriodSwitcher isAnnual={isAnnual} togglePeriod={togglePeriod} />
          </div>
          <div
            className={classnames({
              [style.body]: !isMobile,
              [style.bodymobile]: isMobile,
            })}
          >
            <div className={style.sidebar}>
              <PlanSwitcher
                plans={fields}
                selectedPlans={selectedPlansIndexes}
                onSelect={selectPlan}
              />
            </div>
            <div
              className={style.main}
              onScroll={(event) => setActive(event.target.scrollLeft)}
              ref={scrollableRef}
            >
              <Dashboard
                isAnnual={isAnnual}
                selectedPlans={selectedPlans}
                primary={primary}
                currency={currency}
                basicCost={basicCost}
                plusCost={plusCost}
                businessCost={businessCost}
                isStatusBarVisible={isStatusBarVisible}
                isMobile={isMobile}
              />
            </div>
            {isStatusBarVisible && (
              <StatusBar
                setActive={setActiveOnClick}
                total={CARDS_NUMBER}
                active={activepoint}
              />
            )}
          </div>
        </div>
      </div> */}
    </Waypoint>
  );
};

Packages.propTypes = {
  primary: PropTypes.object.isRequired,
  fields: PropTypes.array.isRequired,
  isBarShowing: PropTypes.bool.isRequired,
  showBar: PropTypes.func.isRequired,
  hideBar: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
  activepoint: PropTypes.number.isRequired,
  scrollableRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  setActiveOnClick: PropTypes.func.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default Packages;
