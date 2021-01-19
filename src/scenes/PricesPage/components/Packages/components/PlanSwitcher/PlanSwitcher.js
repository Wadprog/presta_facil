import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';

import Icon from './components/Icon';
import style from './PlanSwitcher.module.scss';

const PlanSwitcher = ({ plans, selectedPlans, onSelect }) => {
  return (
    <div className={style.container}>
      {plans.map(({ name, location }, index) => {
        const isChecked = selectedPlans.includes(index);
        const onChange = () => onSelect(index);

        return (
          <label key={index} className={style.label}>
            <input
              type="checkbox"
              name="plan"
              checked={isChecked}
              onChange={onChange}
            />
            <div className={style.title}>
              <strong>{RichText.asText(name)}</strong>{' '}
              <span>{RichText.asText(location)}</span>
            </div>
            <Icon checked={isChecked} />
          </label>
        );
      })}
    </div>
  );
};

PlanSwitcher.propTypes = {
  plans: PropTypes.array.isRequired,
  selectedPlans: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default PlanSwitcher;
