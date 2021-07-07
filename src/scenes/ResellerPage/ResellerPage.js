import React from 'react';
import PropTypes from 'prop-types';

import Hero from '@components/Hero';
import Join from './components/Join';
import Program from './components/Program';
import Testimonials from './components/Testimonials';
import Book from './components/Book';
import style from './ResellerPage.module.scss';

const ResellerPage = ({ content }) => {
  const sections = content.map((item, index) => {
    switch (item.slice_type) {
      case 'hero':
        return <Hero key={index} {...item} />;
      case 'join':
        return <Join key={index} {...item} />;
      case 'program':
        return <Program key={index} {...item} />;
      case 'testimonials':
        return <Testimonials key={index} {...item} />;
      case 'book':
        return <Book key={index} {...item} />;
      default:
        throw new Error(`Unknown section type: ${item.slice_type}`);
    }
  });

  return <div className={style.container}>{sections}</div>;
};

ResellerPage.propTypes = {
  content: PropTypes.array.isRequired,
};

export default ResellerPage;
