import React from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';

import style from './Ranger.module.scss';

const Ranger = ({ value, min, max, onChange, numberOfDomainsLabel }) => {
  return (
    <div className={style.container}>
      <div className={style.bar}>
        <div className={style.title}>{numberOfDomainsLabel}</div>
        <div className={style.totalBox}>
          <div className={style.totalValue}>{value}</div>
        </div>
      </div>
      <div className={style.trigger}>
        <InputRange
          minValue={min}
          maxValue={max}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

Ranger.defaultProps = {
  min: 1,
  max: 10,
  onChange: () => {},
};

Ranger.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  numberOfDomainsLabel: PropTypes.string.isRequired,
};

export default Ranger;
