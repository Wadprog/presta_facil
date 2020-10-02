import React from 'react';
import Swiper from 'react-id-swiper';
import { array, object } from 'prop-types';
import { parseString } from '@helpers';
import SlideItem from './SlideItem/SlideItem';
import style from './Hero.module.scss';

const Hero = ({ title, articles }) => {
  const params = {
    slidesPerView: 'auto',
    spaceBetween: 56,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };

  const firstFourArticles = articles.slice(0, 4);

  const titleText = parseString(title.titletext);
  const titleAccent = parseString(title.titleaccent);

  return (
    <section className={style.hero}>
      <h1 className={style.title}>
        {titleText} <strong>{titleAccent}</strong>
      </h1>
      <div className={style.slider}>
        <Swiper {...params}>
          {firstFourArticles.map(({ node }) => {
            return (
              <div className={style.slide} key={node._meta.uid}>
                <SlideItem {...node} />
              </div>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

Hero.propTypes = {
  articles: array,
  title: object,
};

export default Hero;
