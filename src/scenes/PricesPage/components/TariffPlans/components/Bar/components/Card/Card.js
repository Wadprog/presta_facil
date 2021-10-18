import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import classnames from 'classnames';

import { parseString } from '@helpers';
import style from './Card.module.scss';

const CHAT_LINK = '/contact-us';

const Card = ({
  title,
  selectedPlans,
  buttonText,
  buttonLink,
  currency,
  selectedlawsnumber,
  oneprivacypriceusd,
  twoprivacypriceusd,
  threeprivacypriceusd,
  oneprivacypriceeur,
  twoprivacypriceeur,
  threeprivacypriceeur,
  isAnnual,
  annualcoefficient,
  isEnterprise,
  enterpriseCondition,
  enterpriseButtonText,
}) => {
  const [colorized, setColorized] = useState(false);
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

  const getPlans = () => {
    const plansNames = selectedPlans.join(' ').toLowerCase();

    return plansNames;
  };

  const getPeriod = () => {
    return isAnnual ? 'annual' : 'monthly';
  };

  const getPlanName = () => {
    const planFullName = parseString(title.raw);
    const planName = planFullName.split(' ')[0].toLowerCase();

    return planName;
  };

  const getLink = () => {
    if (isEnterprise) {
      return CHAT_LINK;
    }

    const link = `${
      buttonLink.url
    }/${getPlans()}/${getPlanName()}/${currency}/${getPeriod()}`;

    return link;
  };
  return (
    <div
      className={classnames(style.container, { [style.colorized]: colorized })}
      onMouseEnter={() => setColorized(true)}
      onMouseLeave={() => setColorized(false)}
    >
      <div className={style.main}>
        <div className={style.title}>
          <div className={style.type}>
            <RichText render={title.raw} />
          </div>
          <div className={style.name}>
            {isEnterprise ? '' : selectedPlans.join(', ')}
          </div>
        </div>
      </div>
      {isEnterprise ? (
        <div className={style.enterprise}>{enterpriseCondition}</div>
      ) : (
        <div className={classnames([style.cost, style[currency]])}>
          {getCost()}
        </div>
      )}
      <div className={style.footer}>
        <a href={getLink()} className={style.button}>
          {colorized ? (
            <span className={style.gradientText}>
              {isEnterprise
                ? enterpriseButtonText
                : RichText.asText(buttonText.raw)}
            </span>
          ) : (
            <span>
              {isEnterprise
                ? enterpriseButtonText
                : RichText.asText(buttonText.raw)}
            </span>
          )}
        </a>
      </div>
    </div>
  );
};

Card.defaultProps = {
  isEnterprise: false,
};

Card.propTypes = {
  isEnterprise: PropTypes.bool,
  title: PropTypes.object.isRequired,
  selectedPlans: PropTypes.arrayOf.isRequired,
  buttonText: PropTypes.object.isRequired,
  buttonLink: PropTypes.object,
  currency: PropTypes.string.isRequired,
  selectedlawsnumber: PropTypes.number,
  oneprivacypriceusd: PropTypes.number,
  twoprivacypriceusd: PropTypes.number,
  threeprivacypriceusd: PropTypes.number,
  oneprivacypriceeur: PropTypes.number,
  twoprivacypriceeur: PropTypes.number,
  threeprivacypriceeur: PropTypes.number,
  isAnnual: PropTypes.bool.isRequired,
  annualcoefficient: PropTypes.number.isRequired,
  enterpriseCondition: PropTypes.string.isRequired,
  enterpriseButtonText: PropTypes.string.isRequired,
};

export default Card;
