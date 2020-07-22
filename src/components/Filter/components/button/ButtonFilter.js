import React from 'react';
import style from './ButtonFilter.module.scss';
import { func } from 'prop-types';

import Icon from './image/icon.inline.svg';

const ButtonFilter = ({ onClick }) => {
  return (
    <button className={style.button} onClick={onClick}>
      <Icon />
      Filters
    </button>
  );
};

ButtonFilter.propTypes = {
  onClick: func,
};

export default ButtonFilter;
