import React from 'react';
import style from './ButtonFilter.module.scss';

import Icon from './image/icon.inline.svg';

const ButtonFilter = () => {
  return (
    <button className={style.button}>
      <Icon />
      Filters
    </button>
  );
};

export default ButtonFilter;
