import React, { useState, useEffect } from 'react';
import Swiper from 'react-id-swiper';
import { useBreakpoints } from '@hooks';
import { array } from 'prop-types';
import ArrowButton from '@components/ArrowButton/ArrowButton';
import style from './Testimonials.module.scss';
import Item from './components/Item';

const Testimonials = ({ fields }) => {
  const [buildKey, setBuildKey] = useState();
  const { width } = useBreakpoints();

  useEffect(() => {
    setBuildKey(+new Date());
  }, [width]);
  return (
    <div className={style.testimonials}>
      <div className={style.container}>
        <Swiper {...params} key={buildKey}>
          {fields.map((item, index) => {
            return (
              <div className={style.slide} key={`testimonials${index}`}>
                <Item {...item} />
              </div>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

const params = {
  slidesPerView: 'auto',
  spaceBetween: 16,
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  renderPrevButton() {
    return <ArrowButton type="prev" />;
  },
  renderNextButton() {
    return <ArrowButton type="next" />;
  },
};

Testimonials.propTypes = {
  fields: array,
};

export default Testimonials;
