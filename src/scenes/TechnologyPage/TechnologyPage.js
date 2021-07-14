import React from 'react';
import PropTypes from 'prop-types';
import style from './TechnologyPage.module.scss';
import 'swiper/swiper.scss';

import Hero from './components/Hero';
import Benefit from './components/Benefit/Benefit';
import WhatIs from './components/WhatIs/WhatIs';
import Features from './components/Features/Features';
import Banner from './components/Banner/Banner';
import BreadcrumbsSemanticMarkup from '@components/BreadcrumbsMarkup/BreadcrumbsMarkup';

const TechnologyPage = ({ current: body, metatitle, canonical }) => {
  return (
    <div className={style.TechnologyPage}>
      {body.map((section, index) => {
        switch (section.slice_type) {
          case 'hero':
            return <Hero {...section} key={`${section.slice_type}${index}`} />;
          case 'benefits':
            return (
              <Benefit {...section} key={`${section.slice_type}${index}`} />
            );
          case 'whatis':
            return (
              <WhatIs {...section} key={`${section.slice_type}${index}`} />
            );
          case 'how':
            return (
              <Features {...section} key={`${section.slice_type}${index}`} />
            );
          case 'banner':
            return (
              <Banner {...section} key={`${section.slice_type}${index}`} />
            );
          default:
            throw new Error(`Unknown section type: ${section.slice_type}`);
        }
      })}
      <BreadcrumbsSemanticMarkup
        pageTitle={metatitle.text}
        pageUrl={canonical.text}
      />
    </div>
  );
};

TechnologyPage.propTypes = {
  current: PropTypes.array.isRequired,
  canonical: PropTypes.object.isRequired,
  metatitle: PropTypes.object.isRequired,
};

export default TechnologyPage;
