import React from 'react';
import PropTypes from 'prop-types';

import Switcher from './components/Switcher';
import Card from './components/Card';
import style from './Bar.module.scss';

const Bar = ({ plans, fields, primary, isAnnual, currency }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div>
          <div className={style.switcher}>
            {plans.map((plan) => (
              <Switcher key={plan} name={plan} />
            ))}
          </div>
        </div>
      </div>
      <div className={style.block}>
        {fields.map((field, index) => (
          <div className={style.card} key={index}>
            <Card
              title={field.plantitle}
              selectedPlans={plans}
              buttonText={primary.buttontext}
              buttonLink={primary.buttonbaselink}
              currency={currency}
              selectedlawsnumber={plans.length}
              oneprivacypriceusd={field.oneprivacypriceusd}
              twoprivacypriceusd={field.twoprivacypriceusd}
              threeprivacypriceusd={field.threeprivacypriceusd}
              oneprivacypriceeur={field.oneprivacypriceeur}
              twoprivacypriceeur={field.twoprivacypriceeur}
              threeprivacypriceeur={field.threeprivacypriceeur}
              annualcoefficient={primary.annualcoefficient}
              isAnnual={isAnnual}
              isEnterprise={index === 3}
              enterpriseCondition={primary.enterprisecondition.text}
              enterpriseButtonText={primary.enterprisebuttontext.text}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

Bar.propTypes = {
  primary: PropTypes.object.isRequired,
  fields: PropTypes.array.isRequired,
  plans: PropTypes.array.isRequired,
  isAnnual: PropTypes.bool.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Bar;
