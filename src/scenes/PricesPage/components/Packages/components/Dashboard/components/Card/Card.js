import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import classnames from 'classnames';

import style from './Card.module.scss';

const Card = ({
  colorized,
  disabled,
  title,
  name,
  cost,
  condition,
  description,
  buttonText,
  buttonLink,
  currency,
  isEnterprise,
  annualcoefficient,
  isAnnual,
  crossexchangerate,
}) => {
  const getCost = () => {
    const convertedToCurrentCurrency =
      currency === 'USD' ? cost : Math.floor(cost / crossexchangerate);
    const calculatedCost = isAnnual
      ? convertedToCurrentCurrency * annualcoefficient
      : convertedToCurrentCurrency;

    return Math.floor(calculatedCost);
  };

  return (
    <div
      className={classnames(style.container, {
        [style.colorized]: colorized,
        [style.disabled]: disabled,
      })}
    >
      <div className={style.title}>
        <RichText render={title} />
      </div>
      <div className={style.subtitle}>{name}</div>
      {isEnterprise ? (
        <div className={style.enterprise}>Contact us</div>
      ) : (
        <>
          <div className={classnames([style.cost, style[currency]])}>
            {getCost()}
          </div>
          <div className={style.condition}>
            <RichText render={condition} />
          </div>
        </>
      )}
      <div className={style.text}>
        <RichText render={description} />
      </div>
      <div className={style.footer}>
        <a href={buttonLink.url} className={style.button}>
          {colorized ? (
            <span className={style.gradientText}>
              {RichText.asText(buttonText)}
            </span>
          ) : (
            <span>
              {isEnterprise ? 'CHAT WITH US' : RichText.asText(buttonText)}
            </span>
          )}
        </a>
      </div>
    </div>
  );
};

Card.defaultProps = {
  colorized: false,
  isEnterprise: false,
};

Card.propTypes = {
  isEnterprise: PropTypes.bool,
  colorized: PropTypes.bool,
  disabled: PropTypes.bool.isRequired,
  title: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  condition: PropTypes.array.isRequired,
  description: PropTypes.array.isRequired,
  buttonText: PropTypes.array.isRequired,
  buttonLink: PropTypes.object,
  currency: PropTypes.string.isRequired,
  annualcoefficient: PropTypes.number.isRequired,
  isAnnual: PropTypes.bool.isRequired,
  crossexchangerate: PropTypes.number.isRequired,
};

export default Card;
