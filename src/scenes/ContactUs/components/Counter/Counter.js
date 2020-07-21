import React, { memo } from 'react';
import style from './Counter.module.scss';
import { string, func, oneOfType, number } from 'prop-types';
import classnames from 'classnames';

import Minus from './image/minus.inline.svg';
import Plus from './image/plus.inline.svg';

const Counter = ({ label, value, handleChange }) => {
  const handleOnChange = ({ target: { value } }) => {
    handleChange(value);
  };

  const handleIncrease = () => {
    handleChange(++value);
  };
  const handleDecrease = () => {
    handleChange(--value);
  };

  const minusButtonClass = classnames({
    [style.button]: true,
    [style.disabled]: value === 0,
  });

  return (
    <div className={style.container}>
      <label className={style.label} htmlFor="counter">
        {label}
      </label>
      <div className={style.wrapper}>
        <button
          className={minusButtonClass}
          type="button"
          onClick={handleDecrease}
        >
          <Minus />
        </button>
        <input
          className={style.input}
          type="number"
          min="0"
          max="100"
          id="counter"
          name="websites"
          value={value}
          onChange={handleOnChange}
        />
        <button className={style.button} type="button" onClick={handleIncrease}>
          <Plus />
        </button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  label: string,
  handleChange: func,
  value: oneOfType([string, number]),
};

Counter.defaultProps = {
  label: '',
  value: 0,
  handleChange: () => {},
};

export default memo(Counter);
