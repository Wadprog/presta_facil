import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';

import Switcher from './components/Switcher';
import Card from './components/Card';
import style from './Bar.module.scss';

const PLANS = {
  wordwide: 'Worldwide',
};

const Bar = ({
  primary,
  plans,
  basicCost,
  premiumCost,
  selectedPlansNames,
  currency,
}) => {
  const visiblePlans = plans.filter(
    ({ name }) => RichText.asText(name) !== PLANS.wordwide
  );

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div>
          <div className={style.switcher}>
            {visiblePlans.map((plan) => (
              <Switcher key={plan.name} name={plan.name} />
            ))}
          </div>
        </div>
        <div className={style.card}>
          <Card
            title={primary.basicplantitle}
            name={selectedPlansNames}
            cost={basicCost}
            buttonText={primary.buttontext}
            buttonLink={primary.link}
            currency={currency}
          />
        </div>
        <div className={style.card}>
          <Card
            title={primary.premiumplantitle}
            name={selectedPlansNames}
            cost={premiumCost}
            buttonText={primary.buttontext}
            buttonLink={primary.link}
            colorized={true}
            currency={currency}
          />
        </div>
      </div>
    </div>
  );
};

Bar.propTypes = {
  primary: PropTypes.object.isRequired,
  plans: PropTypes.array.isRequired,
  basicCost: PropTypes.number.isRequired,
  premiumCost: PropTypes.number.isRequired,
  selectedPlansNames: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Bar;
