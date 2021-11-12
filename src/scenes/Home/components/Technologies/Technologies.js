import React, { useState, useEffect } from 'react';
import { object, array } from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import { RichText } from 'prismic-reactjs';
import Swiper from 'react-id-swiper';

import Item from './components/Item';
import { useBreakpoints } from '@hooks';
import useGetImages from './useGetImages';
import style from './Technologies.module.scss';

const Technologies = ({ primary, items }) => {
  const [buildKey, setBuildKey] = useState();
  const { width } = useBreakpoints();
  const { background } = useGetImages();
  const { title, description } = primary;

  useEffect(() => {
    setBuildKey(+new Date());
  }, [width]);

  const params = {
    slidesPerView: 'auto',
    slidesPerColumn: 2,
    spaceBetween: 20,
    breakpoints: {
      768: {
        allowTouchMove: false,
        spaceBetween: 0,
        slidesPerColumn: 1,
      },
    },
  };

  return (
    <BackgroundImage
      fluid={background.childImageSharp.fluid}
      className={style.background}
    >
      <div className={style.integration}>
        <div className={style.container}>
          <div className={style.title}>
            <RichText render={title.richText} />
          </div>
          <div className={style.descr}>
            <RichText render={description.richText} />
          </div>
          <Swiper {...params} key={buildKey}>
            {items.map((item, index) => {
              return (
                <div className={style.slide} key={`Technologies${index}`}>
                  <Item {...item} />
                </div>
              );
            })}
          </Swiper>
        </div>
      </div>
    </BackgroundImage>
  );
};

Technologies.propTypes = {
  primary: object,
  items: array,
};

export default Technologies;
