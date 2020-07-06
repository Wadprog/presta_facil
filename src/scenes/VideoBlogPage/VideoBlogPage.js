import React from 'react';
import PropTypes from 'prop-types';
import style from './VideoBlogPage.module.scss';
import Videos from './components/Videos/Videos';
import CallToAction from '@components/CallToAction/CallToAction';

const VideoBlogPage = ({ content }) => {
  const body = content.prismic.allVideopages.edges[0].node.body;
  return (
    <div className={style.HomePage}>
      {body.map((section) => {
        switch (section.type) {
          case 'videolist':
            return <Videos {...section} key={section.type} />;
          case 'cta':
            return <CallToAction {...section} key={section.type} />;
        }
      })}
    </div>
  );
};

VideoBlogPage.propTypes = {
  content: PropTypes.object.isRequired,
};

export default VideoBlogPage;
