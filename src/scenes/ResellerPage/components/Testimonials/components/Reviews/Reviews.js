import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';

import ArrowButton from '@components/ArrowButton/ArrowButton';
import Card from './components/Card';
import style from './Reviews.module.scss';

const params = {
  slidesPerView: 2,
  slidesPerColumn: 2,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      slidesPerColumn: 2,
    },
    768: {
      slidesPerView: 2,
      slidesPerColumn: 1,
    },
    320: {
      slidesPerView: 1,
      slidesPerColumn: 1,
    },
  },
  renderPrevButton() {
    return <ArrowButton type="prev" />;
  },
  renderNextButton() {
    return <ArrowButton type="next" />;
  },
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
