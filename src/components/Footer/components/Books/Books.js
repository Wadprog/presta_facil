import React from 'react';
import Swiper from 'react-id-swiper';
import { string, object } from 'prop-types';
import { Link } from 'gatsby';
import style from './Books.module.scss';

const DEFAULT_SLIDES = 3;

const Books = ({ data, title }) => {
  const { fields } = data;
  const params = {
    slidesPerView: DEFAULT_SLIDES,
    spaceBetween: 20,
    allowTouchMove: data.length > DEFAULT_SLIDES,
    navigation: data.length > DEFAULT_SLIDES && {
      nextEl: '.next',
      prevEl: '.prev',
    },
  };

  return (
    <div className={style.container}>
      <h3>{title}</h3>
      <Swiper {...params}>
        {fields.map(({ image }, index) => {
          return (
            <div className={style.slide} key={`${image.publicURL}${index}`}>
              <Link to="/books">
                <img src={image.url} alt="book" draggable={false} />
              </Link>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

Books.propTypes = {
  data: object,
  title: string,
};

export default Books;
