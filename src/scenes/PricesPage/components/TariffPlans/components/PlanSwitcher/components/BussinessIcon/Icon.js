import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import style from './Icon.module.scss';

const Icon = ({ checked }) => {
  return (
    <span className={classnames(style.container, { [style.checked]: checked })}>
      <span className={style.line}></span>
      <span className={style.pointer}></span>
    </span>
  );
};

Icon.propTypes = {
  checked: PropTypes.bool.isRequired,
};

export default Icon;
