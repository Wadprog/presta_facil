import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import Arrow from '../../image/arrow.inline.svg';

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {text ? text : 'load more'}
      <Arrow />
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default Button;
