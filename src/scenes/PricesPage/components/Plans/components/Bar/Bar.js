import React from 'react';
import PropTypes from 'prop-types';

import Switcher from './components/Switcher';
import Card from './components/Card';
import style from './Bar.module.scss';

const Bar = ({ primary, plan, isAnnual }) => {
  const basicCost = isAnnual
    ? plan.basicplanannualcost
    : plan.basicplanmonthlycost;
  const premiumCost = isAnnual
    ? plan.premiumplanannualcost
    : plan.premiumplanmonthlycost;

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.switcher}>
          <Switcher name={plan.name} />
        </div>
        <div className={style.card}>
          <Card
            title={primary.basicplantitle}
            name={plan.name}
            cost={basicCost}
            buttonText={primary.buttontext}
            buttonLink={primary.buttonlink}
          />
        </div>
        <div className={style.card}>
          <Card
            title={primary.premiumplantitle}
            name={plan.name}
            cost={premiumCost}
            buttonText={primary.buttontext}
            buttonLink={primary.buttonlink}
            colorized={true}
          />
        </div>
      </div>
    </div>
  );
};

Bar.propTypes = {
  primary: PropTypes.object.isRequired,
  plan: PropTypes.object.isRequired,
  isAnnual: PropTypes.bool.isRequired,
};

export default Bar;
