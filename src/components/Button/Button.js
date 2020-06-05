import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import { Link } from 'gatsby';

const VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TRANSPARENT: 'transparent',
  TRANSPARENT_GREEN: 'green',
  WHITE: 'white',
};

const Button = ({
  children,
  variant,
  disabled,
  click,
  type,
  ref,
  fullWidth,
  isHeader,
  element,
}) => {
  const classes = classnames({
    [styles.button]: true,
    [styles[variant]]: styles[variant],
    [styles.fullWidth]: fullWidth,
    [styles.header]: isHeader,
    [styles.disabled]: disabled,
  });

  const Component = element;
  return (
    <Component
      className={classes}
      type={type}
      disabled={disabled}
      onClick={click}
      to={ref}
    >
      {children}
    </Component>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(Object.values(VARIANT)),
  disabled: PropTypes.bool,
  click: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  ref: PropTypes.string,
  fullWidth: PropTypes.bool,
  isHeader: PropTypes.bool,
  element: PropTypes.any,
};

Button.defaultProps = {
  variant: VARIANT.PRIMARY,
  disabled: false,
  type: 'button',
  click: () => {},
  ref: '/',
  fullWidth: false,
  isHeader: false,
  element: Link,
};
export default Button;
export { VARIANT };
