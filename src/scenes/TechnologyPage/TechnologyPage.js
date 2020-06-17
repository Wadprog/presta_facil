import React from 'react';
import PropTypes from 'prop-types';
import style from './TechnologyPage.module.scss';
import 'swiper/swiper.scss';

import Hero from '@components/Hero';

const TechnologyPage = ({ current }) => {
  const body = current.body;

  return (
    <div className={style.SolutionPage}>
      {body.map((section, index) => {
        switch (section.type) {
          case 'hero':
          // return <Hero {...section} key={`${section.type}${index}`} />;
        }
      })}
    </div>
  );
};

TechnologyPage.propTypes = {
  current: PropTypes.object.isRequired,
};

export default TechnologyPage;
