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

  //! Temporarily, check this post for fix –– https://community.prismic.io/t/gatsby-prismic-wrong-text-tag/7693
  const getFixedTitle = (array, type) => {
    const titleClone = JSON.parse(JSON.stringify(array));
    titleClone[0].type = type;

    return titleClone;
  };

  return (
    <section className={style.hero}>
      <div className={style.title}>
        <RichText render={getFixedTitle(title.raw, 'heading1')} />
      </div>
      <div className={style.slider}>
        <Swiper {...params}>
          {firstFourArticles.map(({ node }, index) => {
            return (
              <div className={style.slide} key={index}>
                <SlideItem getFixedTitle={getFixedTitle} {...node} />
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
