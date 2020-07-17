import React from 'react';
import { array } from 'prop-types';
import Button, { VARIANT } from '@components/Button/Button.js';
import style from './Books.module.scss';
import Swiper from 'react-id-swiper';
import Image from '@components/Image/Image';
import { parseString } from '@helpers';

const Books = ({ fields }) => {
  const params = {
    slidesPerView: 'auto',
    spaceBetween: 16,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        spaceBetween: 50,
        slidesPerView: 3,
        initialSlide: 1,
        centeredSlides: true,
      },
    },
  };
  return (
    <div className={style.page}>
      <div className={style.container}>
        <Swiper {...params}>
          {fields.map((item) => {
            const { image, imageSharp, buttontext, downloadlink, flag } = item;
            return (
              <div className={style.slide} key={downloadlink.url}>
                <div className={style.item}>
                  <Image image={flag} className={style.flag} />
                  <div className={style.imageWrapper}>
                    <Image image={image} imageSharp={imageSharp} />
                  </div>
                  <div className={style.buttonWrapper}>
                    <Button
                      variant={VARIANT.PRIMARY}
                      fullWidth
                      to={downloadlink.url}
                      element="external"
                    >
                      {parseString(buttontext)}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

Books.propTypes = {
  fields: array,
};

export default Books;
