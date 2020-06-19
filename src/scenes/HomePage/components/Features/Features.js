import React, { useState, useEffect } from 'react';
import { RichText } from 'prismic-reactjs';
import { object, array } from 'prop-types';
import style from './Features.module.scss';
import Item from './components/Item';
import Swiper from 'react-id-swiper';
import { useBreakpoints } from '@hooks';

const Features = ({ primary, fields }) => {
  const [buildKey, setBuildKey] = useState();
  const { width } = useBreakpoints();
  useEffect(() => {
    setBuildKey(+new Date());
  }, [width]);

  const params = {
    slidesPerView: 'auto',
    spaceBetween: 16,
    breakpoints: {
      768: {
        spaceBetween: 32,
      },
      992: {
        spaceBetween: 0,
        allowTouchMove: false,
      },
    },
  };
  return (
    <div className={style.features}>
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
              <div className={style.slide} key={`Features${index}`}>
                <Item {...item} />
              </div>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

Features.propTypes = {
  primary: object,
  fields: array,
};

export default Features;
