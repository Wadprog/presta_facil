import React from 'react';
import PropTypes from 'prop-types';

import Button from './components/Button';
import Card from './components/Card';
import style from './Dashboard.module.scss';

const Dashboard = ({ primary, plan, isAnnual, isPremium, setIsPremium }) => {
  const basicCost = isAnnual
    ? plan.basicplanannualcost
    : plan.basicplanmonthlycost;
  const premiumCost = isAnnual
    ? plan.premiumplanannualcost
    : plan.premiumplanmonthlycost;
  const condition = isAnnual
    ? primary.annualcondition
    : primary.monthlycondition;

  console.log(plan);

  const selectBasicPlan = () => setIsPremium(false);
  const selectPremiumPlan = () => setIsPremium(true);

  return (
    <div className={style.container}>
      <div className={style.tabs}>
        <Button selected={!isPremium} onClick={selectBasicPlan}>
          Basic plan
        </Button>
        <Button selected={isPremium} onClick={selectPremiumPlan}>
          Premium plan
        </Button>
      </div>
      <div className={style.cards}>
        <Card
          title={primary.basicplantitle}
          name={plan.name}
          cost={basicCost}
          condition={condition}
          description={primary.basicplandescription}
          buttonText={primary.buttontext}
          buttonLink={primary.link}
          disabled={isPremium}
        />
        <Card
          title={primary.premiumplantitle}
          name={plan.name}
          cost={premiumCost}
          condition={condition}
          description={primary.premiumplandescription}
          buttonText={primary.buttontext}
          buttonLink={primary.link}
          colorized={true}
          disabled={!isPremium}
        />
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  primary: PropTypes.object.isRequired,
  plan: PropTypes.object.isRequired,
  isAnnual: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
  setIsPremium: PropTypes.func.isRequired,
};

export default Dashboard;
