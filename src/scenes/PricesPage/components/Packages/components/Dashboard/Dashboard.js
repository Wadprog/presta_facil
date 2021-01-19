import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Card from './components/Card';
import style from './Dashboard.module.scss';

const Dashboard = ({
  isAnnual,
  selectedPlans,
  primary,
  currency,
  basicCost,
  plusCost,
  businessCost,
  isMobile,
}) => {
  const condition = isAnnual
    ? primary.annualcondition
    : primary.monthlycondition;

  return (
    <div className={style.container}>
      <div
        className={classnames({
          [style.cardsmobile]: isMobile,
          [style.cards]: !isMobile,
        })}
      >
        <Card
          title={primary.basicplantitle}
          name={selectedPlans.join(', ')}
          cost={basicCost}
          condition={condition}
          description={primary.basicplandescription}
          buttonText={primary.buttontext}
          buttonLink={primary.buttonbaselink}
          disabled={false}
          currency={currency}
          isAnnual={isAnnual}
          annualcoefficient={primary.annualcoefficient}
          crossexchangerate={primary.crossexchangerate}
        />
        <Card
          title={primary.plusplantitle}
          name={selectedPlans.join(', ')}
          cost={plusCost}
          condition={condition}
          description={primary.plusplandescription}
          buttonText={primary.buttontext}
          buttonLink={primary.buttonbaselink}
          disabled={false}
          currency={currency}
          isAnnual={isAnnual}
          annualcoefficient={primary.annualcoefficient}
          crossexchangerate={primary.crossexchangerate}
        />
        <Card
          title={primary.businessplantitle}
          name={selectedPlans.join(', ')}
          cost={businessCost}
          condition={condition}
          colorized={true}
          description={primary.businessplandescription}
          buttonText={primary.buttontext}
          buttonLink={primary.buttonbaselink}
          disabled={false}
          currency={currency}
          isAnnual={isAnnual}
          annualcoefficient={primary.annualcoefficient}
          crossexchangerate={primary.crossexchangerate}
        />
        <Card
          title={primary.enterpriseplantitle}
          name={selectedPlans.join(', ')}
          cost={0}
          condition={condition}
          description={primary.enterpriseplandescription}
          buttonText={primary.buttontext}
          buttonLink={primary.buttonbaselink}
          disabled={false}
          currency={currency}
          isEnterprise={true}
          isAnnual={isAnnual}
          annualcoefficient={primary.annualcoefficient}
          crossexchangerate={primary.crossexchangerate}
        />
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  primary: PropTypes.object.isRequired,
  isAnnual: PropTypes.bool.isRequired,
  selectedPlans: PropTypes.arrayOf.isRequired,
  currency: PropTypes.string.isRequired,
  plusCost: PropTypes.number.isRequired,
  basicCost: PropTypes.number.isRequired,
  businessCost: PropTypes.number.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default Dashboard;
