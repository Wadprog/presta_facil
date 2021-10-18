import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import style from './PeriodSwitcher.module.scss';

const PeriodSwitcher = ({ isAnnual, togglePeriod, primary }) => {
  const { monthlyperiodtogglelabel, anualperiodtogglelabel } = primary;

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div
          className={classnames(style.title, {
            [style.selected]: !isAnnual,
          })}
        >
          <span className={style.name}>{monthlyperiodtogglelabel.text}</span>
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
          <span className={style.name}>
            {anualperiodtogglelabel.raw[0].text}
          </span>{' '}
          <span className={style.notice}>
            {anualperiodtogglelabel.raw[1].text}
          </span>
        </div>
      </div>
    </div>
  );
};

PeriodSwitcher.propTypes = {
  primary: PropTypes.object.isRequired,
  isAnnual: PropTypes.bool.isRequired,
  togglePeriod: PropTypes.func.isRequired,
};

export default PeriodSwitcher;
