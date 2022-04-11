import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Waypoint } from 'react-waypoint';
import classnames from 'classnames';

import { useScrollDirection } from '@hooks';
import Dashboard from './components/Dashboard';
import Bar from './components/Bar';
import StatusBar from './components/StatusBar';
import PeriodSwitcher from './components/PeriodSwitcher';
import PlanSwitcher from './components/PlanSwitcher';
import { useBreakpoints } from '@hooks';
import style from './TariffPlans.module.scss';

const MOBILE_VIEW = 1220;
const CARDS_LIST_WIDTH = 920;

const TariffPlans = ({
  primary,
  items,
  isBarShowing,
  showBar,
  hideBar,
  activepoint,
  scrollableRef,
  setActiveOnClick,
  setActive,
}) => {
  const laws = [
    {
      title: primary.firstlawtitle.text,
      location: primary.firstlawlocation.text,
    },
    {
      title: primary.secondlawtitle.text,
      location: primary.secondlawlocation.text,
    },
    {
      title: primary.thirdlawtitle.text,
      location: primary.thirdlawlocation.text,
    },
  ];

  const { currencydropdownlabel } = primary;

  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedPlansIndexes, setSelectedPlansIndexes] = useState([0]);
  const [selectedPlans, setSelectedPlans] = useState([
    primary.firstlawtitle.text,
  ]);
  const scrollDirection = useScrollDirection();
  const [currency, setCurrency] = useState('USD');
  const [isStatusBarVisible, setIsStatusBarVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { width } = useBreakpoints();

  const selectCurrency = (value) => setCurrency(value);

  useEffect(() => {
    const mobile = width < MOBILE_VIEW;
    setIsStatusBarVisible(width < CARDS_LIST_WIDTH);
    setIsMobile(mobile);
  }, [width]);

  const selectPlan = (value) => {
    const isSelected = selectedPlansIndexes.includes(value);
    let indexes;
    if (isSelected) {
      indexes =
        selectedPlansIndexes.length === 1
          ? [0]
          : selectedPlansIndexes.filter((item) => item !== value);
    } else {
      indexes = [...selectedPlansIndexes, value].sort((a, b) => a - b);
    }
    setSelectedPlansIndexes(indexes);
    const plans = indexes.map((index) => laws[index].title);
    setSelectedPlans(plans);
  };

  const togglePeriod = () => {
    setIsAnnual(!isAnnual);
  };

  return (
    <Waypoint onEnter={hideBar} onLeave={showBar}>
      <div
        className={classnames({
          [style.wrapper]: !isMobile,
          [style.wrappermobile]: isMobile,
        })}
      >
        <div
          className={classnames(style.bar, {
            [style.disabled]:
              !isBarShowing || scrollDirection === 'up' || isMobile,
          })}
        >
          <Bar
            fields={items}
            plans={selectedPlans}
            primary={primary}
            isAnnual={isAnnual}
            currency={currency}
          />
        </div>
        <div className={style.container}>
          <div
            className={classnames({
              [style.body]: !isMobile,
              [style.bodymobile]: isMobile,
            })}
          >
            <div className={style.sidebar}>
              <div className={style.header}>
                <PeriodSwitcher
                  isAnnual={isAnnual}
                  togglePeriod={togglePeriod}
                  primary={primary}
                />
              </div>
              <PlanSwitcher
                plans={laws}
                selectedPlans={selectedPlansIndexes}
                onSelect={selectPlan}
                selectCurrency={selectCurrency}
                currency={currency}
                currencyDropdownLabel={currencydropdownlabel.text}
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
                fields={items}
                currency={currency}
                isMobile={isMobile}
              />
            </div>
            {isStatusBarVisible && (
              <StatusBar
                setActive={setActiveOnClick}
                total={items.length}
                active={activepoint}
              />
            )}
          </div>
        </div>
      </div>
    </Waypoint>
  );
};

TariffPlans.propTypes = {
  primary: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  isBarShowing: PropTypes.bool.isRequired,
  showBar: PropTypes.func.isRequired,
  hideBar: PropTypes.func.isRequired,
  activepoint: PropTypes.number.isRequired,
  scrollableRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]).isRequired,
  setActiveOnClick: PropTypes.func.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default TariffPlans;
