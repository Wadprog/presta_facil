import React from 'react';
import Swiper from 'react-id-swiper';
import { array, string } from 'prop-types';
import { Link } from 'gatsby';
import style from './Books.module.scss';

const Books = ({ data, title }) => {
  return (
    <div className={style.container}>
      <h3>{title}</h3>
      <Swiper {...params}>
        {data.map(({ image, link }, index) => {
          return (
            <div className={style.slide} key={`${image.publicURL}${index}`}>
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
  title: string,
};

export default Books;
