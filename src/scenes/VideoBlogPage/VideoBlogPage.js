import React from 'react';
import PropTypes from 'prop-types';
import style from './VideoBlogPage.module.scss';
import Videos from './components/Videos/Videos';
import CallToAction from '@components/CallToAction/CallToAction';

const VideoBlogPage = ({ content }) => {
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
    </div>
  );
};

VideoBlogPage.propTypes = {
  content: PropTypes.array.isRequired,
};

export default VideoBlogPage;
