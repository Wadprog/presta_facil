import React, { useState, useEffect } from 'react';
import Swiper from 'react-id-swiper';
import { useBreakpoints } from '@hooks';
import useGetImage from './useGetImage';
import style from './Integration.module.scss';
import Item from './components/Item';

const Integration = () => {
  const { hubspot } = useGetImage();
  const [buildKey, setBuildKey] = useState();
  const { width } = useBreakpoints();

  useEffect(() => {
    setBuildKey(+new Date());
  }, [width]);

  return (
    <div className={style.integration}>
      <div className={style.container}>
        <h2 className={style.title}>
          <span>Easy to integrate</span> <br /> with the solutions you use
        </h2>
        <p className={style.descr}>
          Secure Privacy can easily be integrated with all major CMS systems and
          internet platforms.
        </p>
        <Swiper {...params} key={buildKey}>
          <div className={style.slide}>
            <Item logo={hubspot} name="adobe tag manager" />
          </div>
          <div className={style.slide}>
            <Item logo={hubspot} name="hubspot" />
          </div>
          <div className={style.slide}>
            <Item logo={hubspot} name="hubspot" />
          </div>
          <div className={style.slide}>
            <Item logo={hubspot} name="hubspot" />
          </div>
          <div className={style.slide}>
            <Item logo={hubspot} name="hubspot" />
          </div>
          <div className={style.slide}>
            <Item logo={hubspot} name="hubspot" />
          </div>
          <div className={style.slide}>
            <Item logo={hubspot} name="hubspot" />
          </div>
          <div className={style.slide}>
            <Item logo={hubspot} name="hubspot" />
          </div>
          <div className={style.slide}>
            <Item logo={hubspot} name="hubspot" />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

const params = {
  slidesPerView: 'auto',
  slidesPerColumn: 2,
  spaceBetween: 20,
  breakpoints: {
    768: {
      allowTouchMove: false,
      spaceBetween: 0,
      slidesPerColumn: 1,
    },
  },
};

export default Integration;
