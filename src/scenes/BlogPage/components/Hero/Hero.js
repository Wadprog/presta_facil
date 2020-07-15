import React from 'react';
import Swiper from 'react-id-swiper';
import { array } from 'prop-types';
import SlideItem from './SlideItem/SlideItem';
import style from './Hero.module.scss';

const Hero = ({ articles }) => {
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

  return (
    <section className={style.hero}>
      <h1 className={style.title}>
        Welcome to <strong>our Blog</strong>
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
};

export default Hero;
