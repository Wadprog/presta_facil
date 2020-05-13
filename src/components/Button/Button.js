import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TRANSPARENT: 'transparent',
  TRANSPARENT_GREEN: 'green',
};

const Button = ({ children, variant, disabled, onClick, type }) => {
  const classes = classnames({
    [styles['button']]: true,
    [styles[variant]]: styles[variant],
    [styles.disabled]: disabled,
  });
  return (
    <button
      className={classes}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(Object.values(VARIANT)),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
  variant: VARIANT.PRIMARY,
  disabled: false,
  type: 'button',
  onClick: () => {},
};
export default Button;
export { VARIANT };
