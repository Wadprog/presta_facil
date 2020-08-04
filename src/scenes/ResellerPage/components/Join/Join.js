import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';

import Card from './components/Card';
import style from './Join.module.scss';

const Join = ({ primary }) => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.title}>
          <RichText render={primary.title} />
        </div>
        <div className={style.description}>
          <RichText render={primary.description} />
        </div>
        <div className={style.cardBox}>
          <Card
            title={primary.cardtitle}
            description={primary.carddescription}
            subtitle={primary.cardsubtitle}
            subdescription={primary.cardsubdescription}
            numberOfDomains={+primary.numberofdomains}
            buttonLink={primary.buttonlink}
            buttonText={primary.buttontext}
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
