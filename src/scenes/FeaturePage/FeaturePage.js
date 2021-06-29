import React from 'react';
import PropTypes from 'prop-types';
import style from './FeaturePage.module.scss';
import 'swiper/swiper.scss';

import Hero from '@components/Hero';
import Questions from '@components/Questions/Questions';
import Works from './components/Works';

const FeaturePage = ({ current: body }) => {
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
          default:
            throw new Error(`Unknown section type: ${section.slice_type}`);
        }
      })}
    </div>
  );
};

FeaturePage.propTypes = {
  current: PropTypes.array.isRequired,
  mainSection: PropTypes.array,
};

export default FeaturePage;
