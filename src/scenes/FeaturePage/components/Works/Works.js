import React from 'react';
import style from './Works.module.scss';
import Item from '@components/Works/components/Item';
import Swiper from 'react-id-swiper';
import { RichText } from 'prismic-reactjs';
import { object, array } from 'prop-types';

const Works = ({ primary, fields }) => {
  const isSlider = primary.slider;
  const params = {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    breakpoints: {
      768: {
        spaceBetween: 32,
      },
      1024: {
        spaceBetween: 64,
      },
    },
  };

  const listItem = fields.map((item) => {
    const key = item.name[0].text;
    return (
      <div className={style.slide} key={key}>
        <Item {...item} />
      </div>
    );
  });

  return (
    <div className={style.works}>
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.title}>
            <RichText render={primary.title} />
          </div>
          <div className={style.description}>
            <RichText render={primary.description} />
          </div>
        </div>
        {isSlider ? (
          <Swiper {...params}>{listItem}</Swiper>
        ) : (
          <div className={style.list}>{listItem}</div>
        )}
      </div>
    </div>
  );
};

Works.propTypes = {
  primary: object,
  fields: array,
};

export default Works;
