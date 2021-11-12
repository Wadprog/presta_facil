import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { RichText } from 'prismic-reactjs';

import Video from './components/Video';

import style from './Container.module.scss';

const Container = ({ content }) => {
  const videoItems = content.body[0].items;

  return (
    <div className={style.container}>
      <div className={style.background} />
      <div className={style.content}>
        <div className={style.head}>
          <div className={style.title}>
            <RichText render={content.title.richText}></RichText>
          </div>
          <div className={style.subtitle}>
            <p>{content.subtitle.text}</p>
          </div>
        </div>
        <div className={style.inner}>
          <div className={style.divider} />
          {videoItems.map((videoData, index) => (
            <React.Fragment key={videoData.videourl}>
              <Video data={videoData} index={index} />
              {index !== videoItems.length - 1 && (
                <div className={cn(style.divider, style.dividerGrey)} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

Container.propTypes = {
  content: PropTypes.object.isRequired,
};

export default Container;
