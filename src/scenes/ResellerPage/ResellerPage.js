import React from 'react';
import PropTypes from 'prop-types';

import Hero from '@components/Hero';
import Join from './components/Join';
import Program from './components/Program';
import Testimonials from './components/Testimonials';
import style from './ResellerPage.module.scss';

const ResellerPage = ({ content }) => {
  const body = content.prismic.allPricesresellerpages.edges[0].node.body;
  const sections = body.map((item, index) => {
    switch (item.type) {
      case 'hero':
        return <Hero key={index} {...item} />;
      case 'join':
        return <Join key={index} {...item} />;
      case 'program':
        return <Program key={index} {...item} />;
      case 'testimonials':
        return <Testimonials key={index} {...item} />;
      default:
        return null;
    }
  });

  return (
    <div className={style.container}>
      <div className={style.wrapper}>{sections}</div>
    </div>
  );
};

ResellerPage.propTypes = {
  content: PropTypes.object.isRequired,
};

export default ResellerPage;
