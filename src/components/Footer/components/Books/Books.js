import React from 'react';
import Swiper from 'react-id-swiper';
import { array } from 'prop-types';
import { Link } from 'gatsby';
import style from './Books.module.scss';

const Books = ({ data }) => {
  return (
    <div className={style.container}>
      <h3>Download Our Free Ebooks</h3>
      <Swiper {...params}>
        {data.map(({ image, link }) => {
          return (
            <div className={style.slide} key={image.publicURL}>
              <Link to={link}>
                <img src={image.publicURL} alt="book" />
              </Link>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

const params = {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
};

Books.propTypes = {
  data: array,
};

export default Books;
