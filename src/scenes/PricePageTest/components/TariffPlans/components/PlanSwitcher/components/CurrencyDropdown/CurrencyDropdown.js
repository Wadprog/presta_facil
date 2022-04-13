import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Arrow from './image/arrow.inline.svg';
import style from './CurrencyDropdown.module.scss';

const currencies = [
  { title: 'USD', value: 'USD' },
  { title: 'EUR', value: 'EUR' },
];

const CurrencyDropdown = ({
  selectCurrency,
  currency,
  currencyDropdownLabel,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const setCurrency = (index) => {
    selectCurrency(currencies[index].value);
    setIsOpen(false);
  };

  return (
    <div className={style.container}>
      <p className={style.title}>{currencyDropdownLabel}</p>
      <div className={style.wrapper}>
        <div className={style.selected} onClick={() => setIsOpen(!isOpen)}>
          {currency}
          <span
            className={classnames({
              [style.opened]: isOpen,
            })}
          >
            <Arrow />
          </span>
        </div>
        {isOpen && (
          <ul className={style.list}>
            {currencies.map((item, index) => (
              <li
                key={currency.value}
                className={classnames(style.item, {
                  [style.activeitem]: item.value === currency,
                })}
                onClick={() => setCurrency(index)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

CurrencyDropdown.propTypes = {
  selectCurrency: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
  currencyDropdownLabel: PropTypes.string.isRequired,
};

export default CurrencyDropdown;
