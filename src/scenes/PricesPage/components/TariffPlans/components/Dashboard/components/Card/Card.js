import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import classnames from 'classnames';

import style from './Card.module.scss';

const CHAT_LINK = 'https://secureprivacy.ai/enterprise-inquiry/';

const Card = ({
  isEnterprise,
  colorized,
  title,
  name,
  selectedlawsnumber,
  oneprivacypriceusd,
  twoprivacypriceusd,
  threeprivacypriceusd,
  oneprivacypriceeur,
  twoprivacypriceeur,
  threeprivacypriceeur,
  condition,
  description,
  buttonText,
  buttonLink,
  disabled,
  currency,
  isAnnual,
  annualcoefficient,
  selectedPlans,
}) => {
  const getCost = () => {
    let cost = 0;
    if (currency === 'USD') {
      switch (selectedlawsnumber) {
        case 1:
          cost = oneprivacypriceusd;
          break;
        case 2:
          cost = twoprivacypriceusd;
          break;
        case 3:
          cost = threeprivacypriceusd;
          break;
      }
    } else {
      switch (selectedlawsnumber) {
        case 1:
          cost = oneprivacypriceeur;
          break;
        case 2:
          cost = twoprivacypriceeur;
          break;
        case 3:
          cost = threeprivacypriceeur;
          break;
      }
    }

    return isAnnual ? cost * annualcoefficient : cost;
  };

  const getPeriod = () => {
    return isAnnual ? 'annual' : 'monthly';
  };

  const getPlanName = () => {
    const planFullName = title[0].text;
    const planName = planFullName.split(' ')[0].toLowerCase();

    return planName;
  };

  const getLink = () => {
    if (isEnterprise) {
      return CHAT_LINK;
    }

    const link = `${buttonLink.url}/${selectedPlans.join(
      ' '
    )}/${getPlanName()}/${currency}/${getPeriod()}`;

    return link;
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
        <a href={getLink()} className={style.button}>
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
  title: PropTypes.arrayOf.isRequired,
  name: PropTypes.string.isRequired,
  selectedlawsnumber: PropTypes.number,
  oneprivacypriceusd: PropTypes.number,
  twoprivacypriceusd: PropTypes.number,
  threeprivacypriceusd: PropTypes.number,
  oneprivacypriceeur: PropTypes.number,
  twoprivacypriceeur: PropTypes.number,
  threeprivacypriceeur: PropTypes.number,
  condition: PropTypes.arrayOf.isRequired,
  description: PropTypes.arrayOf.isRequired,
  buttonText: PropTypes.arrayOf.isRequired,
  buttonLink: PropTypes.object.isRequired,
  disabled: PropTypes.bool.isRequired,
  currency: PropTypes.string.isRequired,
  isAnnual: PropTypes.bool.isRequired,
  annualcoefficient: PropTypes.number.isRequired,
  selectedPlans: PropTypes.arrayOf.isRequired,
};

export default Card;
