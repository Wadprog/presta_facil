import React from 'react';
import PropTypes from 'prop-types';

import style from './ResellerPage.module.scss';
import Hero from '@components/Hero';

const ResellerPage = ({ content }) => {
  const body = content.prismic.allPricesresellerpages.edges[0].node.body;
  const sections = body.map((item, index) => {
    switch (item.type) {
      case 'hero':
        return <Hero key={index} {...item} />;
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
