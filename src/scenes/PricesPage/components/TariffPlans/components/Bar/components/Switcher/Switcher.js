import React from 'react';
import PropTypes from 'prop-types';

import checkIconSrc from './images/check.svg';
import style from './Switcher.module.scss';

const Switcher = ({ name }) => {
  return (
    <div className={style.container}>
      <span className={style.title}>{name}</span>
      <span className={style.icon}>
        <span className={style.line}></span>
        <span className={style.pointer}>
          <img
            src={checkIconSrc}
            alt="check symbol"
            loading="lazy"
            className={style.symbol}
          />
        </span>
      </span>
    </div>
  );
};

Switcher.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Switcher;
