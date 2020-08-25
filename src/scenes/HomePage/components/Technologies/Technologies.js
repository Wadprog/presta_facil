import React, { useState, useEffect } from 'react';
import { object, array } from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import { RichText } from 'prismic-reactjs';
import Swiper from 'react-id-swiper';

import Item from './components/Item';
import { useBreakpoints } from '@hooks';
import useGetImages from './useGetImages';
import style from './Technologies.module.scss';

const Technologies = ({ primary, fields }) => {
  const [buildKey, setBuildKey] = useState();
  const { width } = useBreakpoints();
  const { background } = useGetImages();

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
            <RichText render={primary.title} />
          </div>
          <div className={style.descr}>
            <RichText render={primary.description} />
          </div>
          <Swiper {...params} key={buildKey}>
            {fields.map((item, index) => {
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
  fields: array,
};

export default Technologies;
