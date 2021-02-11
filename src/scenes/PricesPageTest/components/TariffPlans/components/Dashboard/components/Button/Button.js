import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import style from './Button.module.scss';

const Button = ({ children, selected, ...properties }) => {
  return (
    <button
      className={classnames(style.container, {
        [style.selected]: selected,
      })}
      {...properties}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default Button;
