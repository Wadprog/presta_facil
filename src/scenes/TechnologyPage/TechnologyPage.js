import React from 'react';
import PropTypes from 'prop-types';
import style from './TechnologyPage.module.scss';
import 'swiper/swiper.scss';

import Hero from './components/Hero';
import Benefit from './components/Benefit/Benefit';
import WhatIs from './components/WhatIs/WhatIs';
import Features from './components/Features/Features';
import Banner from './components/Banner/Banner';

const TechnologyPage = ({ current }) => {
  const body = current.body;
  return (
    <div className={style.TechnologyPage}>
      {body.map((section, index) => {
        switch (section.type) {
          case 'hero':
            return <Hero {...section} key={`${section.type}${index}`} />;
          case 'benefits':
            return <Benefit {...section} key={`${section.type}${index}`} />;
          case 'whatis':
            return <WhatIs {...section} key={`${section.type}${index}`} />;
          case 'how':
            return <Features {...section} key={`${section.type}${index}`} />;
          case 'banner':
            return <Banner {...section} key={`${section.type}${index}`} />;
        }
      })}
    </div>
  );
};

TechnologyPage.propTypes = {
  current: PropTypes.object.isRequired,
};

export default TechnologyPage;
