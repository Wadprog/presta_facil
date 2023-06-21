import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Card from './components/Card';
import style from './Dashboard.module.scss';
import EnterpriseCard from './components/EnterpriseCard';
const Dashboard = ({
  isAnnual,
  selectedPlans,
  fields,
  primary,
  currency,
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
        {fields
          .filter((field, idx) => idx != 3)
          .map((item, index) => (
            <Card
              key={index}
              title={item.plantitle}
              name={selectedPlans.join(', ')}
              selectedPlans={selectedPlans}
              selectedlawsnumber={selectedPlans.length}
              oneprivacypriceusd={item.oneprivacypriceusd}
              twoprivacypriceusd={item.twoprivacypriceusd}
              threeprivacypriceusd={item.threeprivacypriceusd}
              oneprivacypriceeur={item.oneprivacypriceeur}
              twoprivacypriceeur={item.twoprivacypriceeur}
              threeprivacypriceeur={item.threeprivacypriceeur}
              condition={condition}
              description={item.plandescription}
              buttonText={primary.buttontext}
              buttonLink={primary.buttonbaselink}
              disabled={false}
              currency={currency}
              isAnnual={isAnnual}
              annualcoefficient={primary.annualcoefficient}
              isEnterprise={index === 3}
              isMobile={isMobile}
              enterpriseCondition={primary.enterprisecondition.text}
              enterpriseButtonText={primary.enterprisebuttontext.text}
              enterpriseButtonLink={primary.enterprisebuttonlink.url}
            />
          ))}
      </div>
      {<EnterpriseCard />}
    </div>
  );
};

Dashboard.propTypes = {
  isAnnual: PropTypes.bool.isRequired,
  selectedPlans: PropTypes.arrayOf.isRequired,
  fields: PropTypes.arrayOf.isRequired,
  primary: PropTypes.object.isRequired,
  currency: PropTypes.string.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default Dashboard;
