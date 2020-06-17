import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import Arrow from '../../image/arrow.inline.svg';

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      load more
      <Arrow />
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
