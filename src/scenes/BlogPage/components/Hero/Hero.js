import React from 'react';
import { RichText } from 'prismic-reactjs';
import Swiper from 'react-id-swiper';
import { array, object } from 'prop-types';
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

  return (
    <section className={style.hero}>
      <div className={style.title}>
        <RichText render={title.raw} />
      </div>
      <div className={style.slider}>
        <Swiper {...params}>
          {firstFourArticles.map(({ node }, index) => {
            return (
              <div className={style.slide} key={index}>
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
