import React from 'react';
import PropTypes from 'prop-types';

import Hero from './components/Hero';
import Plans from './components/Plans';
import Features from './components/Features';
import style from './PricesPage.module.scss';

const PricesPage = ({ content }) => {
  const body = content.prismic.allPricespages.edges[0].node.body;
  const sections = body.map((item, index) => {
    switch (item.type) {
      case 'hero':
        return <Hero key={index} {...item} />;
      case 'plans':
        return <Plans key={index} {...item} />;
      case 'features':
        return <Features key={index} {...item} />;
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
