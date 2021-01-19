import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import style from './PeriodSwitcher.module.scss';

const PeriodSwitcher = ({ isAnnual, togglePeriod }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div
          className={classnames(style.title, {
            [style.selected]: !isAnnual,
          })}
        >
          <span className={style.name}>Monthly</span>
        </div>
        <label className={style.label}>
          <input type="checkbox" checked={isAnnual} onChange={togglePeriod} />
          <span className={style.icon}></span>
          <span
            className={classnames(style.pointer, {
              [style.selected]: isAnnual,
            })}
          ></span>
        </label>
        <div
          className={classnames(style.title, {
            [style.selected]: isAnnual,
          })}
        >
          <span className={style.name}>Annual</span>{' '}
          <span className={style.notice}>(2 months for free)</span>
        </div>
      </div>
    </div>
  );
};

PeriodSwitcher.propTypes = {
  isAnnual: PropTypes.bool.isRequired,
  togglePeriod: PropTypes.func.isRequired,
};

export default PeriodSwitcher;
