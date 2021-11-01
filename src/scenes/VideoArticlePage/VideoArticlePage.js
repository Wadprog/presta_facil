import React from 'react';
import PropTypes from 'prop-types';

import CallToAction from '@components/CallToAction/CallToAction';
import BreadcrumbsSemanticMarkup from '@components/BreadcrumbsMarkup/BreadcrumbsMarkup';
import Container from './components/Container';

import style from './VideoArticlePage.module.scss';

const VideoArticlePage = ({ content, canonical, metatitle }) => (
  <div className={style.videoArticlePage}>
    {content.body.map((section) => {
      switch (section.slice_type) {
        case 'video_article_list':
          return <Container content={content} />;
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

VideoArticlePage.propTypes = {
  content: PropTypes.object.isRequired,
  canonical: PropTypes.object.isRequired,
  metatitle: PropTypes.object.isRequired,
};

export default VideoArticlePage;
