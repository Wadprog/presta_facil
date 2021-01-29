import React, { useContext } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import { Link } from 'gatsby';
import LangContext from '@contexts';
import { langPath } from '@helpers';

const VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TRANSPARENT: 'transparent',
  WHITE: 'white',
  GRADIENT: 'gradient',
};

const Button = ({
  children,
  variant,
  disabled,
  click,
  type,
  to,
  fullWidth,
  isHeader,
  element,
  isDirect,
}) => {
  const classes = classnames({
    [styles.button]: true,
    [styles[variant]]: styles[variant],
    [styles.fullWidth]: fullWidth,
    [styles.header]: isHeader,
    [styles.disabled]: disabled,
  });
  const currentLang = useContext(LangContext);

  if (element === 'external') {
    return (
      <a
        className={classes}
        href={to}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  const Component = element;

  return (
    <>
      {isDirect ? (
        <a
          className={classes}
          type={type}
          disabled={disabled}
          onClick={click}
          href={to}
        >
          {children}
        </a>
      ) : (
        <Component
          className={classes}
          type={type}
          disabled={disabled}
          onClick={click}
          to={langPath(currentLang) + to}
        >
          {children}
        </Component>
      )}
    </>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(Object.values(VARIANT)),
  disabled: PropTypes.bool,
  click: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  to: PropTypes.string,
  fullWidth: PropTypes.bool,
  isHeader: PropTypes.bool,
  element: PropTypes.any,
  isDirect: PropTypes.bool,
};

Button.defaultProps = {
  variant: VARIANT.PRIMARY,
  disabled: false,
  type: 'button',
  click: () => {},
  to: '/',
  fullWidth: false,
  isHeader: false,
  element: Link,
  isDirect: false,
};
export default Button;
export { VARIANT };
