import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../PlanSwitcher/components/BussinessIcon';

import style from './BussinessCardsSwitcher.module.scss';

const BussinessCardsSwitcher = ({ isAnnual, togglePeriod }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div
          className={classnames(style.title, {
            [style.selected]: !isAnnual,
          })}
        >
          <span className={style.name}>{'BUSINESS'}</span>
        </div>
        <label className={style.label}>
          <input type="checkbox" checked={isAnnual} onChange={togglePeriod} />
          <Icon checked={isAnnual} />
        </label>
        <div
          className={classnames(style.title, {
            [style.selected]: isAnnual,
          })}
        >
          <span className={style.name}>{'ENTERPRISE'}</span>
        </div>
      </div>
    </div>
  );
};

BussinessCardsSwitcher.propTypes = {
  primary: PropTypes.object.isRequired,
  isAnnual: PropTypes.bool.isRequired,
  togglePeriod: PropTypes.func.isRequired,
};

export default BussinessCardsSwitcher;
