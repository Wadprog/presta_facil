import React from 'react';
import PropTypes from 'prop-types';
import CurrencyDropdown from './components/CurrencyDropdown';
import style from './PlanSwitcher.module.scss';

const PlanSwitcher = ({ selectCurrency, currency, currencyDropdownLabel }) => {
  return (
    <div className={style.container}>
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
