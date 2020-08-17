import React from 'react';
import Swiper from 'react-id-swiper';
import { object } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { Link } from 'gatsby';
import style from './Books.module.scss';

const DEFAULT_SLIDES = 3;

const Books = ({ data }) => {
  const { primary, fields } = data;
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
      <RichText render={primary.title} />
      <Swiper {...params}>
        {fields.map(({ image }, index) => {
          return (
            <div className={style.slide} key={`${image.publicURL}${index}`}>
              <Link to="/books">
                <img
                  src={image.url}
                  alt="book"
                  draggable={false}
                  loading="lazy"
                />
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
};

export default Books;
