import React, { memo } from 'react';
import { bool, string, func, oneOfType, number } from 'prop-types';

import classnames from 'classnames';
import style from './Input.module.scss';

const Input = ({
  id,
  value,
  name,
  placeholder,
  handleChange,
  errorMessage,
  valid,
  invalid,
}) => {
  const classes = classnames({
    [style.container]: true,
    [style.valid]: valid,
    [style.invalid]: invalid,
  });
  return (
    <div className={classes}>
      <input
        id={id}
        placeholder={placeholder}
        className={style.input}
        onChange={handleChange}
        value={value}
        name={name}
      />
      {invalid && <div className={style.error}>{errorMessage}</div>}
    </div>
  );
};

Input.propTypes = {
  id: string,
  valid: bool,
  invalid: bool,
  label: string,
  errorMessage: string,
  placeholder: string,
  handleChange: func,
  value: oneOfType([string, number]),
  name: string,
};

Input.defaultProps = {
  id: '',
  valid: false,
  invalid: false,
  errorMessage: '',
  placeholder: '',
  handleChange: () => {},
};

export default memo(Input);
