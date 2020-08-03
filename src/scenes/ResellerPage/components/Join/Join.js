import React from 'react';
import { RichText } from 'prismic-reactjs';

import style from './Join.module.scss';

const Join = ({ primary }) => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.title}>
          <RichText render={primary.title} />
        </div>
        <div className={style.description}>
          <RichText render={primary.description} />
        </div>
      </div>
    </div>
  );
};

export default Join;
