import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './IconButton.module.scss';

const VARIANT_ICON = {
  PLAY: 'play',
  BURGER: 'burger',
  CLOSE: 'close',
};

const IconButton = ({ children, variant, disabled, click, type }) => {
  const classes = classnames({
    [styles['button']]: true,
    [styles[variant]]: styles[variant],
    [styles.disabled]: disabled,
  });
  return (
    <button className={classes} type={type} disabled={disabled} onClick={click}>
      {children}
      <span className={styles.hidden}>Icon Button</span>
    </button>
  );
};

IconButton.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(Object.values(VARIANT_ICON)),
  disabled: PropTypes.bool,
  click: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

IconButton.defaultProps = {
  variant: VARIANT_ICON.PRIMARY,
  disabled: false,
  type: 'button',
  click: () => {},
};
export default IconButton;
export { VARIANT_ICON };
