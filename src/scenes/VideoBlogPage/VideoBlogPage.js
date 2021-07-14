import React from 'react';
import PropTypes from 'prop-types';

import Videos from './components/Videos/Videos';
import CallToAction from '@components/CallToAction/CallToAction';
import BreadcrumbsSemanticMarkup from '@components/BreadcrumbsMarkup/BreadcrumbsMarkup';
import style from './VideoBlogPage.module.scss';

const VideoBlogPage = ({ content, metatitle, canonical }) => {
  return (
    <div className={style.HomePage}>
      {content.map((section) => {
        switch (section.slice_type) {
          case 'videolist':
            return <Videos {...section} key={section.slice_type} />;
          case 'cta':
            return <CallToAction {...section} key={section.slice_type} />;
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

VideoBlogPage.propTypes = {
  content: PropTypes.array.isRequired,
  canonical: PropTypes.object.isRequired,
  metatitle: PropTypes.object.isRequired,
};

export default VideoBlogPage;
