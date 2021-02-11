import React from 'react';

import Questions from '@components/Questions/Questions';
import style from './Questions.module.scss';

const Component = (props) => {
  return (
    <div className={style.wrapper}>
      <Questions {...props} />
    </div>
  );
};

export default Component;
