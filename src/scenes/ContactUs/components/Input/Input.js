import React from 'react';
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
}) => {
  const classes = classnames({
    [style.container]: true,
    [style.invalid]: !valid,
    [style.empty]: value.length === 0,
  });
  return (
    <div className={classes}>
      <input
        id={id}
        className={style.input}
        onChange={handleChange}
        value={value}
        name={name}
      />
      <label className={style.label} htmlFor={id}>
        {placeholder}
      </label>
      {!valid && <div className={style.error}>{errorMessage}</div>}
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
  errorMessage: '',
  placeholder: '',
  handleChange: () => {},
};

export default Input;
