import React, { useState, useEffect } from 'react';
import Swiper from 'react-id-swiper';
import classnames from 'classnames';
import { useBreakpoints } from '@hooks';
import { array } from 'prop-types';

import style from './Testimonials.module.scss';
import Item from './components/Item';
import Arrow from './image/arrow.inline.svg';

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
  // centeredSlides: true,
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
  // eslint-disable-next-line react/display-name
  renderPrevButton: () => (
    <span className={prevButtonClass}>
      <Arrow />
    </span>
  ),
  // eslint-disable-next-line react/display-name
  renderNextButton: () => (
    <span className={nextButtonClass}>
      <Arrow />
    </span>
  ),
};

const nextButtonClass = classnames({
  next: true,
  [style.next]: true,
});
const prevButtonClass = classnames({
  prev: true,
  [style.prev]: true,
});

Testimonials.propTypes = {
  fields: array,
};

export default Testimonials;
