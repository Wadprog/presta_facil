import React from 'react';
import style from './ButtonFilter.module.scss';
import { func, object } from 'prop-types';

import Icon from './image/icon.inline.svg';

const ButtonFilter = ({ onClick, filtersbuttontext }) => {
  return (
    <button className={style.button} onClick={onClick}>
      <Icon />
      {filtersbuttontext.text}
    </button>
  );
};

ButtonFilter.propTypes = {
  onClick: func,
  filtersbuttontext: object,
};

export default ButtonFilter;
