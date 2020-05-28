import React, { useState, useEffect } from 'react';
import { RichText } from 'prismic-reactjs';
import { array, object } from 'prop-types';
import { Link } from 'gatsby';
import Swiper from 'react-id-swiper';
import style from './Solutions.module.scss';
import useGetImage from './useGetImage';
import { useBreakpoints } from '@hooks';

const Solutions = ({ primary, fields }) => {
  const [buildKey, setBuildKey] = useState();
  const { width } = useBreakpoints();
  const { arrow } = useGetImage();

  useEffect(() => {
    setBuildKey(+new Date());
  }, [width]);
  return (
    <div className={style.solutions}>
      <div className={style.container}>
        <div className={style.title}>
          <RichText render={primary.title} />
        </div>
        <div className={style.descr}>
          <RichText render={primary.description} />
        </div>
        <Swiper {...params} key={buildKey}>
          {fields.map(({ image, title, text }, index) => {
            return (
              <div className={style.slide} key={`solutions${index}`}>
                <Link to="/" className={style.item}>
                  <img src={image.url} alt={image.alt} />
                  <RichText render={title} />
                  <div>
                    (<RichText render={text} />)
                  </div>
                  <img
                    className={style.arrow}
                    src={arrow.publicURL}
                    alt="arrow icon"
                  />
                </Link>
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
      spaceBetween: 32,
    },
    1024: {
      allowTouchMove: false,
      spaceBetween: 0,
    },
  },
};

Solutions.propTypes = {
  primary: object,
  fields: array,
};

export default Solutions;
