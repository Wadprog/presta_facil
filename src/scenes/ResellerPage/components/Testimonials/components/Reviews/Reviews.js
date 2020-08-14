import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';

import Card from './components/Card';
import style from './Reviews.module.scss';

const params = {
  slidesPerView: 1,
  spaceBetween: 16,
};

const Reviews = ({
  items,
  buttonText,
  buttonTextShort,
  buttonLink,
  logotype,
}) => {
  return (
    <div className={style.container}>
      <div className={style.slider}>
        <Swiper {...params}>
          {items.map((item, index) => {
            return (
              <div key={index} className={style.slide}>
                <Card
                  {...item}
                  buttonText={buttonText}
                  buttonTextShort={buttonTextShort}
                  buttonLink={buttonLink}
                  logotype={logotype}
                />
              </div>
            );
          })}
        </Swiper>
      </div>
      <ul className={style.list}>
        {items.map((item, index) => {
          return (
            <li key={index} className={style.item}>
              <Card
                {...item}
                buttonText={buttonText}
                buttonTextShort={buttonTextShort}
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
  buttonTextShort: PropTypes.array.isRequired,
  buttonLink: PropTypes.array.isRequired,
  logotype: PropTypes.object.isRequired,
};

export default Reviews;
