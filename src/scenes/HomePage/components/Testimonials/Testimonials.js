import React, { useState, useEffect } from 'react';
import style from './Testimonials.module.scss';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';
import Item from './components/Item';
import Arrow from './image/arrow.inline.svg';
import classnames from 'classnames';
import { useBreakpoints } from '@hooks';
import useGetImage from './useGetImage';

const Testimonials = () => {
  const { photo } = useGetImage();
  const [buildKey, setBuildKey] = useState();
  const { width } = useBreakpoints();

  useEffect(() => {
    setBuildKey(+new Date());
  }, [width]);

  const testimonialsList = [
    {
      photo,
      name: 'Julia-Carolin Zeng',
      position: 'charlieonthemove.com',
      review:
        'I would definitely recommend it to everyone, especially if they aren&apos;t aware of GDPR compliance. They need to take action because not being compliant can get very expensive.',
    },
    {
      photo,
      name: 'Francis U',
      position: 'Database Coordinator / Mid-Market(201-500 employees)',
      review:
        'I would definitely recommend it to everyone, especially if they aren&apos;t aware of GDPR compliance. They need to take action because not being compliant can get very expensive.',
    },
    {
      photo,
      name: 'Atif M',
      position: 'Technical Analyst / Enterprise(10,001+ employees)',
      review:
        'The affordable pricing considering its <b>high-quality functionalit.</b>',
    },
  ];

  return (
    <div className={style.container}>
      <Swiper {...params} key={buildKey}>
        {testimonialsList.map((item) => {
          return (
            <div className={style.slide} key={item.name}>
              <Item {...item} />
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

const params = {
  slidesPerView: 'auto',
  centeredSlides: true,
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

export default Testimonials;
