import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';

import checkIconSrc from './images/check.svg';
import style from './Switcher.module.scss';

const Switcher = ({ name }) => {
  return (
    <div className={style.container}>
      <span className={style.title}>{RichText.asText(name)}</span>
      <span className={style.icon}>
        <span className={style.line}></span>
        <span className={style.pointer}>
          <img src={checkIconSrc} alt="check symbol" className={style.symbol} />
        </span>
      </span>
    </div>
  );
};

Switcher.propTypes = {
  name: PropTypes.array.isRequired,
};

export default Switcher;
