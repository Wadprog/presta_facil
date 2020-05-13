import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './SingInButton.module.scss';
import Icon from './image/icon.inline.svg';

const SingInButton = ({ disabled, onClick, type }) => {
  const classes = classnames({
    [styles['button']]: true,
    [styles.disabled]: disabled,
  });
  return (
    <button
      className={classes}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      Sign in
      <span className={styles.wrapper}>
        <Icon />
      </span>
    </button>
  );
};

SingInButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

SingInButton.defaultProps = {
  disabled: false,
  type: 'button',
  onClick: () => {},
};
export default SingInButton;
