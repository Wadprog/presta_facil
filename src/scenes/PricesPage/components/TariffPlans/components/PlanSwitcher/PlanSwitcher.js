import React from 'react';
import PropTypes from 'prop-types';
// import Icon from './components/Icon';
import CurrencyDropdown from './components/CurrencyDropdown';
import style from './PlanSwitcher.module.scss';

const PlanSwitcher = ({
  // plans,
  // selectedPlans,
  // onSelect,
  selectCurrency,
  currency,
  currencyDropdownLabel,
}) => {
  return (
    <div className={style.container}>
      {/* {plans.map(({ title, location }, index) => {
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
              <strong>{title}</strong> <span>{location}</span>
            </div>
            <Icon checked={isChecked} />
          </label>
        );
      })}
      <div className={style.line}></div> */}
      <CurrencyDropdown
        selectCurrency={selectCurrency}
        currency={currency}
        currencyDropdownLabel={currencyDropdownLabel}
      />
    </div>
  );
};

PlanSwitcher.propTypes = {
  plans: PropTypes.array,
  selectedPlans: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  selectCurrency: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
  currencyDropdownLabel: PropTypes.string.isRequired,
};

export default PlanSwitcher;
