import React, { useContext } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import { Link } from 'gatsby';
import LangContext from '@contexts';
import { langPath, isExternalUrl } from '@helpers';

const VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TRANSPARENT: 'transparent',
  WHITE: 'white',
  GRADIENT: 'gradient',
  THANKYOU: 'thankyou',
  SOLUTION: 'solutionpage',
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
  ignoreLang,
}) => {
  const classes = classnames({
    [styles.button]: true,
    [styles[variant]]: styles[variant],
    [styles.fullWidth]: fullWidth,
    [styles.header]: isHeader,
    [styles.disabled]: disabled,
  });
  const currentLang = useContext(LangContext);

  const Component = element;

  if (to.includes('quiz.secureprivacy.ai')) {
    return (
      <a
        className={classes}
        href={to}
        target="_blank"
        rel="nofollow noreferrer noopener"
      >
        {children}
      </a>
    );
  }

  if (isExternalUrl(to)) {
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
  if (!to.startsWith('/')) {
    return (
      <Component
        className={classes}
        type={type}
        disabled={disabled}
        onClick={click}
        to={ignoreLang ? `/${to}` : `${langPath(currentLang)}/${to}`}
      >
        {children}
      </Component>
    );
  }
  return (
    <Component
      className={classes}
      type={type}
      disabled={disabled}
      onClick={click}
      to={langPath(currentLang) + to}
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
  to: PropTypes.string,
  fullWidth: PropTypes.bool,
  isHeader: PropTypes.bool,
  element: PropTypes.any,
  ignoreLang: PropTypes.bool,
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
  ignoreLang: false,
};
export default Button;
export { VARIANT };
