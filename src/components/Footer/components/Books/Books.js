import React, { useContext } from 'react';
import Swiper from 'react-id-swiper';
import { object } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { Link } from 'gatsby';

import style from './Books.module.scss';
import { langPath } from '@helpers';
import LangContext from '@contexts';
import Image from '@components/Image/Image';

const DEFAULT_SLIDES = 3;

const Books = ({ data }) => {
  const { primary, items } = data;
  const params = {
    slidesPerView: DEFAULT_SLIDES,
    spaceBetween: 20,
    allowTouchMove: data.length > DEFAULT_SLIDES,
    navigation: data.length > DEFAULT_SLIDES && {
      nextEl: '.next',
      prevEl: '.prev',
    },
  };
  const currentLang = useContext(LangContext);

  return (
    <div className={style.container}>
      <RichText render={primary.title.richText} />
      <Swiper {...params}>
        {items.map(({ image }, index) => {
          return (
            <div className={style.slide} key={`${image.url}${index}`}>
              <Link to={langPath(currentLang) + '/books'}>
                <Image image={image} key={image.url} />
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
