import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import classnames from 'classnames';

import { parseString } from '@helpers';
import style from './Card.module.scss';
import Arrow from '../../../../../../../../../src/components/ArticlePreview/image/arrow.inline.svg';

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
  description,
  buttonText,
  buttonLink,
  disabled,
  currency,
  isAnnual,
  annualcoefficient,
  selectedPlans,
  isMobile,
  enterpriseCondition,
  enterpriseButtonText,
  enterpriseButtonLink,
  planBenefits,
  isStarter,
  isMorePlans,
  toggleBussinessCards,
  checkFeaturesOnCard,
}) => {
  const [colorized, setColorized] = useState(false);
  const getCost = () => {
    let cost = 0;
    if (currency === 'US Dollar $') {
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

    const link = `${buttonLink.url}/${getPlans()}/${getPlanName()}/${
      currency === 'Euros €' ? 'EUR' : 'USD'
    }/${getPeriod()}`;

    return link;
  };

  return (
    <div
      onMouseEnter={() => setColorized(false)}
      onMouseLeave={() => setColorized(false)}
      className={classnames(style.container, {
        [style.colorized]: colorized,
        [style.colorizedmobile]: isMobile && colorized,
        [style.colorizeddesktop]: !isMobile && colorized,
        [style.disabled]: disabled,
        [style.isMorePlans]: isMorePlans,
      })}
    >
      {isMorePlans && <div className={style.isMorePlansBg}></div>}

      <div className={style.title}>
        <RichText render={title.richText} />
        {!isMorePlans && <hr />}
      </div>
      <div className={style.innerWrapper}>
        <div className={style.text}>
          <RichText render={planBenefits.richText} />
        </div>
        {/* <div className={style.subtitle}>{isEnterprise ? '' : name}</div> */}
        {isEnterprise || isMorePlans ? (
          isEnterprise && (
            <div className={style.enterprise}>{enterpriseCondition}</div>
          )
        ) : (
          <div className={style.wrappperPrice}>
            <div
              className={classnames([
                style.cost,
                style[currency === 'Euros €' ? 'EUR' : 'USD'],
              ])}
            >
              {isStarter ? <RichText render={title.richText} /> : getCost()}
            </div>
            <div className={style.condition}>
              <RichText render={description.richText} />
            </div>
          </div>
        )}
        {isMorePlans && (
          <div
            className={`${style.planBenefits} ${style.isMorePlansDescription}`}
          >
            <RichText render={description.richText} />
          </div>
        )}
        {!isMorePlans && (
          <div className={style.bottomText}>
            {currency === 'Euros €' &&
            checkFeaturesOnCard &&
            checkFeaturesOnCard.richText &&
            checkFeaturesOnCard.richText.length
              ? checkFeaturesOnCard.richText[0].text.split('$').join('€')
              : !checkFeaturesOnCard.richText.length
              ? ''
              : checkFeaturesOnCard.richText[0].text}
          </div>
        )}
        {isMorePlans && (
          <div
            className={style.isMorePlansButton}
            onClick={() => toggleBussinessCards()}
          >
            <Arrow />
          </div>
        )}
      </div>

      {!isMorePlans && (
        <div className={style.footer}>
          <a href={getLink()} className={style.button}>
            {colorized ? (
              <span className={style.gradientText}>
                {isEnterprise
                  ? enterpriseButtonText
                  : RichText.asText(buttonText.richText)}
              </span>
            ) : (
              <span>
                {isEnterprise
                  ? enterpriseButtonText
                  : RichText.asText(buttonText.richText)}
              </span>
            )}
          </a>
        </div>
      )}
    </div>
  );
};

Card.defaultProps = {
  isEnterprise: false,
};

Card.propTypes = {
  isEnterprise: PropTypes.bool,
  isStarter: PropTypes.bool,
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
  bottomClarification: PropTypes.arrayOf.isRequired,
  planBenefits: PropTypes.arrayOf.isRequired,
  checkFeaturesOnCard: PropTypes.arrayOf.isRequired,
  description: PropTypes.arrayOf.isRequired,
  buttonText: PropTypes.arrayOf.isRequired,
  buttonLink: PropTypes.object.isRequired,
  disabled: PropTypes.bool.isRequired,
  currency: PropTypes.string.isRequired,
  isAnnual: PropTypes.bool.isRequired,
  isMorePlans: PropTypes.bool.isRequired,
  annualcoefficient: PropTypes.number.isRequired,
  selectedPlans: PropTypes.arrayOf.isRequired,
  isMobile: PropTypes.bool.isRequired,
  enterpriseCondition: PropTypes.string.isRequired,
  enterpriseButtonText: PropTypes.string.isRequired,
  enterpriseButtonLink: PropTypes.string.isRequired,
  toggleBussinessCards: PropTypes.any,
};

export default Card;
