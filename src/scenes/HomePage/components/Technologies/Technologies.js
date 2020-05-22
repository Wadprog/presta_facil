import React, { useState, useEffect } from 'react';
import Swiper from 'react-id-swiper';
import { RichText } from 'prismic-reactjs';
import { object, array } from 'prop-types';
import { useBreakpoints } from '@hooks';
import style from './Technologies.module.scss';
import Item from './components/Item';

const Technologies = ({ primary, fields }) => {
  const [buildKey, setBuildKey] = useState();
  const { width } = useBreakpoints();

  useEffect(() => {
    setBuildKey(+new Date());
  }, [width]);

  return (
    <div className={style.integration}>
      <div className={style.container}>
        <div className={style.title}>
          <RichText render={primary.title} />
        </div>
        <div className={style.descr}>
          <RichText render={primary.description} />
        </div>
        <Swiper {...params} key={buildKey}>
          {fields.map((item, index) => {
            return (
              <div className={style.slide} key={`Technologies${index}`}>
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

Technologies.propTypes = {
  primary: object,
  fields: array,
};

export default Technologies;
