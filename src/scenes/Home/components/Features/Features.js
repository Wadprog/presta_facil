import React, { useState, useEffect } from 'react';
import { object, array } from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import Swiper from 'react-id-swiper';
import { RichText } from 'prismic-reactjs';

import Item from './components/Item';
import { useBreakpoints } from '@hooks';
import useGetImages from './useGetImages';
import style from './Features.module.scss';

const Features = ({ primary, items }) => {
  const [buildKey, setBuildKey] = useState();
  const { width } = useBreakpoints();
  const { background } = useGetImages();
  const { title, description } = primary;

  useEffect(() => {
    setBuildKey(+new Date());
  }, [width]);

  const params = {
    slidesPerView: 'auto',
    spaceBetween: 16,
    breakpoints: {
      768: {
        spaceBetween: 32,
      },
      992: {
        spaceBetween: 0,
        allowTouchMove: false,
      },
    },
  };

  return (
    <BackgroundImage
      fluid={background.childImageSharp.fluid}
      className={style.background}
    >
      <div className={style.features}>
        <div className={style.container}>
          <div className={style.title}>
            <RichText render={title.richText} />
          </div>
          <div className={style.descr}>
            <RichText render={description.richText} />
          </div>
          <div className={style.slider} key={buildKey}>
            <Swiper {...params}>
              {items.map((item, index) => {
                return (
                  <div className={style.slide} key={`Features${index}`}>
                    <Item {...item} />
                  </div>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

Features.propTypes = {
  primary: object,
  items: array,
};

export default Features;
