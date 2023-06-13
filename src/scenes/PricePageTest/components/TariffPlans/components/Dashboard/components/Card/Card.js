import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import classnames from 'classnames';

import { parseString } from '@helpers';
import style from './Card.module.scss';

const Card = ({
  isEnterprise,
  title,
  // name,
  selectedlawsnumber,
  oneprivacypriceusd,
  twoprivacypriceusd,
  threeprivacypriceusd,
  oneprivacypriceeur,
  twoprivacypriceeur,
  threeprivacypriceeur,
  condition,
  // description,
  buttonText,
  buttonLink,
  disabled,
  currency,
  isAnnual,
  annualcoefficient,
  selectedPlans,
  // enterpriseCondition,
  // enterpriseButtonText,
  enterpriseButtonLink,
}) => {
  // console.log({ name, enterpriseCondition, enterpriseButtonText });

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
    const planFullName = parseString(title.richText);
    const planName = planFullName.split(' ')[0].toLowerCase();

    return planName;
  };

  const getPlans = () => {
    const plansNames = selectedPlans.join(' ').toLowerCase();

    return plansNames;
  };

  const getLink = () => {
    if (isEnterprise) {
      return enterpriseButtonLink;
    }

    const link = `${
      buttonLink.url
    }/${getPlans()}/${getPlanName()}/${currency}/${getPeriod()}`;

    return link;
  };

  return (
    <div
      className={classnames(style.container, {
        [style.disabled]: disabled,
      })}
    >
      <div className={style.body}>
        <div className={style.title}>
          <RichText render={title.richText} />
        </div>
        <div className={style.divider}></div>

        <div className={style.text}>
          {/* <RichText render={description.richText} /> */}
          Some text to describe the plan
        </div>
        <div className={style.priceContainer}>
          <div className={classnames([style.cost, style[currency]])}>
            {getCost()}
          </div>
          <div className={style.cost}>
            <RichText render={condition.richText} />
          </div>
        </div>
        <div className={style.description}>
          {/* <RichText render={description.richText} /> */}
          500k content /month
        </div>
        <div className={style.footer}>
          <a href={getLink()} className={style.button}>
            <span>{RichText.asText(buttonText.richText)}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  isEnterprise: false,
};

Card.propTypes = {
  isEnterprise: PropTypes.bool,
  title: PropTypes.arrayOf.isRequired,
  // name: PropTypes.string.isRequired,
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
  isMobile: PropTypes.bool.isRequired,
  // enterpriseCondition: PropTypes.string.isRequired,
  // enterpriseButtonText: PropTypes.string.isRequired,
  enterpriseButtonLink: PropTypes.string.isRequired,
};

export default Card;
