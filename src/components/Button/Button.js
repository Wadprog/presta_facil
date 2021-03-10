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
}) => {
  const classes = classnames({
    [styles.button]: true,
    [styles[variant]]: styles[variant],
    [styles.fullWidth]: fullWidth,
    [styles.header]: isHeader,
    [styles.disabled]: disabled,
  });
  const currentLang = useContext(LangContext);

  const isExternalUrl = (buttonUrl) => {
    if (buttonUrl.startsWith('/')) {
      return false;
    }
    const destinationUrl = new URL(buttonUrl);
    return destinationUrl.host === 'sp-website.onrender.com' ? false : true;
  };

  const Component = element;

  if (isExternalUrl(to)) {
    const protocol = 'https://';
    const externalUrl = to.startsWith('http') ? to : `${protocol}${to}`;
    return (
      <a
        className={classes}
        href={externalUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
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
};
export default Button;
export { VARIANT };
