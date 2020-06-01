import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TRANSPARENT: 'transparent',
  TRANSPARENT_GREEN: 'green',
  PLAY: 'play',
  BURGER: 'burger',
  CLOSE: 'close',
};

const Button = ({ children, variant, disabled, click, type }) => {
  const classes = classnames({
    [styles['button']]: true,
    [styles[variant]]: styles[variant],
    [styles.disabled]: disabled,
  });
  return (
    <button className={classes} type={type} disabled={disabled} onClick={click}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(Object.values(VARIANT)),
  disabled: PropTypes.bool,
  click: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
  variant: VARIANT.PRIMARY,
  disabled: false,
  type: 'button',
  click: () => {},
};
export default Button;
export { VARIANT };
