import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';

import Card from './components/Card';
import style from './Join.module.scss';

const Join = ({ primary }) => {
  const {
    title,
    buttonlink,
    buttontext,
    numberofdomains,
    cardsubdescription,
    description,
    unitcost,
    cardtitle,
    carddescription,
    cardsubtitle,
  } = primary;
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.title}>
          <RichText render={title.raw} />
        </div>
        <div className={style.description}>
          <RichText render={description.raw} />
        </div>
        <div className={style.cardBox}>
          <Card
            title={cardtitle}
            description={carddescription}
            subtitle={cardsubtitle}
            subdescription={cardsubdescription}
            buttonLink={buttonlink}
            buttonText={buttontext}
            numberOfDomains={+numberofdomains}
            unitCost={+unitcost}
          />
        </div>
      </div>
    </div>
  );
};

Join.propTypes = {
  primary: PropTypes.object.isRequired,
  fields: PropTypes.array,
};

export default Join;
