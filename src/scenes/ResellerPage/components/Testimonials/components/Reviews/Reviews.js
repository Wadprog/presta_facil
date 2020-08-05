import React from 'react';
import PropTypes from 'prop-types';

import Card from './components/Card';
import style from './Reviews.module.scss';

const Reviews = ({ items, buttonText, buttonLink, logotype }) => {
  console.log(items, buttonText, buttonLink, logotype);

  return (
    <div className={style.container}>
      <div className={style.slider}>Slider</div>
      <ul className={style.list}>
        {items.map((item, index) => {
          return (
            <li key={index} className={style.item}>
              <Card
                {...item}
                buttonText={buttonText}
                buttonLink={buttonLink}
                logotype={logotype}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Reviews.propTypes = {
  items: PropTypes.array.isRequired,
  buttonText: PropTypes.array.isRequired,
  buttonLink: PropTypes.array.isRequired,
  logotype: PropTypes.object.isRequired,
};

export default Reviews;
