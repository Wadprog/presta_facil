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
  unitCost,
}) => {
  const [rangeValue, setRangeValue] = useState(1);
  const total = unitCost * rangeValue;
  const handleRangerChange = (value) => setRangeValue(value);

  return (
    <div className={style.container}>
      <div className={style.operationArea}>
        <div className={style.title}>
          <RichText render={title} />
        </div>
        <div className={style.description}>
          <RichText render={description} />
        </div>
        <div className={style.rangerBox}>
          <Ranger
            max={numberOfDomains}
            value={rangeValue}
            onChange={handleRangerChange}
          />
        </div>
      </div>
      <div className={style.totalArea}>
        <div className={style.subtitle}>
          <RichText render={subtitle} />
        </div>
        <div className={style.subdescription}>
          <RichText render={subdescription} />
        </div>
        <div className={style.total}>{total}</div>
        <div className={style.buttonBox}>
          <Button
            to={RichText.asText(buttonLink)}
            variant={VARIANT.PRIMARY}
            fullWidth={true}
          >
            {RichText.asText(buttonText)}
          </Button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.array.isRequired,
  description: PropTypes.array.isRequired,
  subtitle: PropTypes.array.isRequired,
  subdescription: PropTypes.array.isRequired,
  buttonLink: PropTypes.array.isRequired,
  buttonText: PropTypes.array.isRequired,
  numberOfDomains: PropTypes.number.isRequired,
  unitCost: PropTypes.number.isRequired,
};

export default Card;
