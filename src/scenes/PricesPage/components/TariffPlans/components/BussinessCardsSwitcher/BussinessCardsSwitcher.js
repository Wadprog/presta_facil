import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../PlanSwitcher/components/BussinessIcon';
import { RichText } from 'prismic-reactjs';

import style from './BussinessCardsSwitcher.module.scss';

const BussinessCardsSwitcher = ({ isAnnual, togglePeriod, businessToggle }) => {
  if (businessToggle && businessToggle.length)
    return (
      <div className={style.wrapper}>
        <div className={style.container}>
          <div
            className={classnames(style.title, {
              [style.selected]: !isAnnual,
            })}
          >
            <span className={style.name}>
              <RichText render={businessToggle[0].business_toggle.richText} />
            </span>
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
            <span className={style.name}>
              <RichText render={businessToggle[0].enterprise_toggle.richText} />
            </span>
          </div>
        </div>
      </div>
    );
};

BussinessCardsSwitcher.propTypes = {
  businessToggle: PropTypes.array.isRequired,
  primary: PropTypes.object.isRequired,
  isAnnual: PropTypes.bool.isRequired,
  togglePeriod: PropTypes.func.isRequired,
};

export default BussinessCardsSwitcher;
