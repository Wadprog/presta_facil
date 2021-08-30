import React from 'react';
import PropTypes from 'prop-types';
import style from './FeaturePage.module.scss';
import 'swiper/swiper.scss';

import Hero from '@components/Hero';
import Questions from '@components/Questions/Questions';
import Works from './components/Works';
import FaqSemanticMarkup from '@components/FaqSemanticMarkup/FaqSemanticMarkup';
import BreadcrumbsSemanticMarkup from '@components/BreadcrumbsMarkup/BreadcrumbsMarkup';
import Content from '@components/Content/Content';

const FeaturePage = ({ current: body, canonical, metatitle }) => {
  const questions = body.filter((item) => item.slice_type === 'questions');
  const faqLists = questions.map((element) => element.items);
  const faqList = faqLists.flat();

  return (
    <div className={style.SolutionPage}>
      {body.map((section, index) => {
        switch (section.slice_type) {
          case 'hero':
            return <Hero {...section} key={`${section.slice_type}${index}`} />;
          case 'works':
            return <Works {...section} key={`${section.slice_type}${index}`} />;
          case 'questions':
            return (
              <Questions {...section} key={`${section.slice_type}${index}`} />
            );
          case 'content':
            return (
              <Content {...section} key={`${section.slice_type}${index}`} />
            );
          default:
            throw new Error(`Unknown section type: ${section.slice_type}`);
        }
      })}
      <FaqSemanticMarkup questions={faqList} />
      <BreadcrumbsSemanticMarkup
        pageTitle={metatitle.text}
        pageUrl={canonical.text}
      />
    </div>
  );
};

FeaturePage.propTypes = {
  current: PropTypes.array.isRequired,
  mainSection: PropTypes.array,
  canonical: PropTypes.object.isRequired,
  metatitle: PropTypes.object.isRequired,
};

export default FeaturePage;
