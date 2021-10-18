import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';

import Ranger from './components/Ranger';
import Button, { VARIANT } from '@components/Button/Button.js';
import 'react-input-range/lib/css/index.css';
import style from './Card.module.scss';

const Card = ({
  title,
  description,
  subtitle,
  subdescription,
  buttonLink,
  buttonText,
  numberOfDomains,
  numberOfDomainsLabel,
  unitCost,
}) => {
  const [rangeValue, setRangeValue] = useState(1);
  const total = unitCost * rangeValue;
  const handleRangerChange = (value) => setRangeValue(value);

  return (
    <div className={style.container}>
      <div className={style.operationArea}>
        <div className={style.title}>
          <RichText render={title.raw} />
        </div>
        <div className={style.description}>
          <RichText render={description.raw} />
        </div>
        <div className={style.rangerBox}>
          <Ranger
            max={numberOfDomains}
            value={rangeValue}
            onChange={handleRangerChange}
            numberOfDomainsLabel={numberOfDomainsLabel}
          />
        </div>
      </div>
      <div className={style.totalArea}>
        <div className={style.subtitle}>
          <RichText render={subtitle.raw} />
        </div>
        <div className={style.subdescription}>
          <RichText render={subdescription.raw} />
        </div>
        <div className={style.total}>{total}</div>
        <div className={style.buttonBox}>
          <Button
            to={RichText.asText(buttonLink.raw)}
            variant={VARIANT.PRIMARY}
            fullWidth={true}
          >
            {RichText.asText(buttonText.raw)}
          </Button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.object.isRequired,
  description: PropTypes.object.isRequired,
  subtitle: PropTypes.object.isRequired,
  subdescription: PropTypes.object.isRequired,
  buttonLink: PropTypes.object.isRequired,
  buttonText: PropTypes.object.isRequired,
  numberOfDomains: PropTypes.number.isRequired,
  numberOfDomainsLabel: PropTypes.string.isRequired,
  unitCost: PropTypes.number.isRequired,
};

export default Card;
