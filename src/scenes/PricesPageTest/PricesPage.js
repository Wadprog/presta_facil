import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import Hero from './components/Hero';
import PlansFeatures from './components/PlansFeatures';
import TariffPlans from './components/TariffPlans';
import Partners from './components/Partners';
import Questions from './components/Questions';
import ContactUs from './components/ContactUs';
import style from './PricesPage.module.scss';
import { useBreakpoints } from '@hooks';

const CARDS_LIST_WIDTH = 920;
const PLANS_CARDS_NUMBER = 4;

const PricesPage = ({ content }) => {
  const [isBarShowing, setIsBarShowing] = useState(false);
  const [activepoint, setActivePoint] = useState(0);
  const { width } = useBreakpoints();
  const myPackagesRef = useRef(null);

  const showBar = () => setIsBarShowing(true);
  const hideBar = () => setIsBarShowing(false);

  const setActive = (value) => {
    const hiddenWidth = CARDS_LIST_WIDTH - width;
    const hiddenWidthPerCard = hiddenWidth / PLANS_CARDS_NUMBER;
    const active =
      Math.ceil(value / hiddenWidthPerCard) > PLANS_CARDS_NUMBER - 1
        ? PLANS_CARDS_NUMBER - 1
        : Math.ceil(value / hiddenWidthPerCard);
    setActivePoint(active);
    myPackagesRef.current.scrollLeft = value;
  };

  const setActiveOnClick = (index) => {
    setActivePoint(index);
    const hiddenWidth = CARDS_LIST_WIDTH - width;
    const hiddenWidthPerCard = hiddenWidth / PLANS_CARDS_NUMBER;
    const leftScroll =
      index === PLANS_CARDS_NUMBER - 1
        ? hiddenWidth
        : index * hiddenWidthPerCard;
    myPackagesRef.current.scrollLeft = leftScroll;
  };

  const body = content.prismic.allPricespagetests.edges[0].node.body;
  const sections = body.map((item, index) => {
    switch (item.type) {
      case 'hero':
        return <Hero key={index} {...item} />;
      case 'tariffplans':
        return (
          <TariffPlans
            key={index}
            {...item}
            isBarShowing={isBarShowing}
            showBar={showBar}
            hideBar={hideBar}
            activepoint={activepoint}
            scrollableRef={myPackagesRef}
            setActive={setActive}
            setActiveOnClick={setActiveOnClick}
          />
        );
      case 'packagesfeatures':
        return (
          <PlansFeatures
            {...item}
            key={index}
            showBar={showBar}
            hideBar={hideBar}
            activepoint={activepoint}
          />
        );
      case 'partners':
        return <Partners key={index} {...item} />;
      case 'questions':
        return <Questions key={index} {...item} />;
      case 'contactus':
        return <ContactUs key={index} {...item} />;
      default:
        return null;
    }
  });

  return (
    <div className={style.wrapper}>
      <div className={style.container}>{sections}</div>
    </div>
  );
};

PricesPage.propTypes = {
  content: PropTypes.object.isRequired,
};

export default PricesPage;