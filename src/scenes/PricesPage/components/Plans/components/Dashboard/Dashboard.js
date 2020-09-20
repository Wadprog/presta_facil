import React from 'react';
import PropTypes from 'prop-types';

import Button from './components/Button';
import Card from './components/Card';
import style from './Dashboard.module.scss';

const Dashboard = ({
  primary,
  isAnnual,
  isPremium,
  setIsPremium,
  basicCost,
  premiumCost,
  selectedPlansNames,
}) => {
  const condition = isAnnual
    ? primary.annualcondition
    : primary.monthlycondition;

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
          name={selectedPlansNames}
          cost={basicCost}
          condition={condition}
          description={primary.basicplandescription}
          buttonText={primary.buttontext}
          buttonLink={primary.link}
          disabled={isPremium}
        />
        <Card
          title={primary.premiumplantitle}
          name={selectedPlansNames}
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
  isAnnual: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
  setIsPremium: PropTypes.func.isRequired,
  basicCost: PropTypes.number.isRequired,
  premiumCost: PropTypes.number.isRequired,
  selectedPlansNames: PropTypes.string.isRequired,
};

export default Dashboard;
