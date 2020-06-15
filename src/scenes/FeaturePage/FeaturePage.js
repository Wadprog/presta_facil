import React from 'react';
import PropTypes from 'prop-types';
import style from './FeaturePage.module.scss';
import 'swiper/swiper.scss';

import Hero from '@components/Hero';
import Questions from '@components/Questions/Questions';

const FeaturePage = ({ current }) => {
  const body = current.body;

  return (
    <div className={style.SolutionPage}>
      {body.map((section, index) => {
        switch (section.type) {
          case 'hero':
            return <Hero {...section} key={`${section.type}${index}`} />;
          case 'questions':
            return <Questions {...section} key={`${section.type}${index}`} />;
        }
      })}
    </div>
  );
};

FeaturePage.propTypes = {
  current: PropTypes.object.isRequired,
  mainSection: PropTypes.array,
};

export default FeaturePage;
