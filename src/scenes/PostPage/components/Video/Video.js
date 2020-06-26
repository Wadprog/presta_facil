import React from 'react';
import style from './Video.module.scss';
import ReactPlayer from 'react-player';
import { object } from 'prop-types';

const Video = ({ primary }) => {
  const { video } = primary;

  return (
    <div className={style.video}>
      <ReactPlayer url={video.url} width="100%" height="100%" controls />
    </div>
  );
};

Video.propTypes = {
  primary: object,
};

export default Video;
