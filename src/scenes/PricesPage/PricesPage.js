import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import Hero from './components/Hero';
import PlansFeatures from './components/PlansFeatures';
import TariffPlans from './components/TariffPlans';
import Partners from './components/Partners';
import Questions from './components/Questions';
import ContactUs from './components/ContactUs';
import FaqSemanticMarkup from '@components/FaqSemanticMarkup/FaqSemanticMarkup';
import BreadcrumbsSemanticMarkup from '@components/BreadcrumbsMarkup/BreadcrumbsMarkup';
import style from './PricesPage.module.scss';
import { useBreakpoints } from '@hooks';
import { globalHistory as history } from '@reach/router';

const CARDS_LIST_WIDTH = 920;

const PricesPage = ({ content, canonical, metatitle }) => {
  const [isBarShowing, setIsBarShowing] = useState(false);
  const [cardNumber, setCardNumber] = useState(0);
  const [activepoint, setActivePoint] = useState(0);
  const [itemsSlider, setItemSlider] = useState([]);
  const [itemsSliderFull, setItemSliderFull] = useState([]);
  const [businessToggle, setBusinessToggle] = useState([]);
  const [businessToggleFull, setBusinessToggleFull] = useState([]);
  const { location } = history;

  const { width } = useBreakpoints();
  const myPackagesRef = useRef(null);

  const showBar = () => setIsBarShowing(true);
  const hideBar = () => setIsBarShowing(false);

  useEffect(() => {
    setCardNumber(location.hash.includes('enterprise') ? 2 : 3);
  }, [location]);

  const setActive = (value) => {
    const hiddenWidth = CARDS_LIST_WIDTH - width;
    const hiddenWidthPerCard = hiddenWidth / cardNumber;
    const active =
      Math.ceil(value / hiddenWidthPerCard) > cardNumber - 1
        ? cardNumber - 1
        : Math.ceil(value / hiddenWidthPerCard);
    setActivePoint(active);
    myPackagesRef.current.scrollLeft = value;
  };

  const setActiveOnClick = (index) => {
    setCardNumber(location.hash.includes('enterprise') ? 2 : 3);

    setActivePoint(index);
    const hiddenWidth = CARDS_LIST_WIDTH - width;
    const hiddenWidthPerCard = hiddenWidth / cardNumber;
    const leftScroll =
      index === cardNumber - 1 ? hiddenWidth : index * hiddenWidthPerCard;
    myPackagesRef.current.scrollLeft = leftScroll;
  };

  const questions = content.filter((item) => item.slice_type === 'questions');
  const faqLists = questions.map((element) => element.items);
  const faqList = faqLists.flat();

  useEffect(() => {
    location.hash.includes('enterprise') && setActivePoint(0);
  }, [location]);

  useEffect(() => {
    if (content && content.length) {
      content.map((item) => {
        if (item.slice_type === 'widget_slider_with_plans') {
          setItemSlider(item.items);
        }
        if (item.slice_type === 'bussiness_enterprise_toggle') {
          setBusinessToggle(item.items);
        }
      });
    }
  }, []);

  useEffect(() => {
    if (itemsSlider && itemsSlider.length) {
      setItemSliderFull(itemsSlider);
    }
    if (businessToggle && businessToggle.length) {
      setBusinessToggleFull(businessToggle);
    }
  }, [itemsSlider, businessToggle]);

  const sections = content.map((item, index) => {
    switch (item.slice_type) {
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
            sliderPlans={itemsSliderFull}
            businessToggle={businessToggleFull}
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
            setActiveOnClick={setActiveOnClick}
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
      // throw new Error(`Unknown section type: ${item.slice_type}`);
    }
  });

  return (
    <div className={style.wrapper}>
      <div className={style.container}>{sections}</div>
      <FaqSemanticMarkup questions={faqList} />
      <BreadcrumbsSemanticMarkup
        pageTitle={metatitle.text}
        pageUrl={canonical.text}
      />
    </div>
  );
};

PricesPage.propTypes = {
  content: PropTypes.array.isRequired,
  canonical: PropTypes.object.isRequired,
  metatitle: PropTypes.object.isRequired,
};

export default PricesPage;
