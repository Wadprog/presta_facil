import React from 'react';
import style from './Works.module.scss';
import Item from '@components/Works/components/Item';
import Swiper from 'react-id-swiper';
import { RichText } from 'prismic-reactjs';
import { object, array } from 'prop-types';

const Works = ({ primary, items }) => {
  const { title, description, slider: isSlider } = primary;
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

  const listItem = items.map((item) => {
    const key = item.name.text;
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
            <RichText render={title.richText} />
          </div>
          <div className={style.description}>
            <RichText render={description.richText} />
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
  items: array,
};

export default Works;
