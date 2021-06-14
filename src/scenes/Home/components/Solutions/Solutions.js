import React, { useState, useEffect, useContext } from 'react';
import { RichText } from 'prismic-reactjs';
import { array, object } from 'prop-types';
import { Link } from 'gatsby';
import Swiper from 'react-id-swiper';
import BackgroundImage from 'gatsby-background-image';

import style from './Solutions.module.scss';
import useGetImage from './useGetImage';
import { useBreakpoints } from '@hooks';
import LangContext from '@contexts';
import { langPath } from '@helpers';
import Image from '@components/Image/Image';
import useGetEarthImage from './useGetEarthImage';

const Solutions = ({ primary, fields }) => {
  const [buildKey, setBuildKey] = useState();
  const { width } = useBreakpoints();
  const { arrow } = useGetImage();
  const currentLang = useContext(LangContext);
  const { background } = useGetEarthImage();

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
      1024: {
        allowTouchMove: false,
        spaceBetween: 0,
      },
    },
  };

  return (
    <BackgroundImage
      fluid={background.childImageSharp.fluid}
      className={style.background}
    >
      <div className={style.solutions}>
        <div className={style.container}>
          <div className={style.title}>
            <RichText render={primary.title} />
          </div>
          <div className={style.descr}>
            <RichText render={primary.description} />
          </div>
          <Swiper {...params} key={buildKey}>
            {fields.map(
              ({ image, imageSharp, title, text, pagename }, index) => {
                const link = `${langPath(
                  currentLang
                )}/solution/${RichText.asText(pagename)}`;
                return (
                  <div className={style.slide} key={`solutions${index}`}>
                    <Link to={link} className={style.item}>
                      <Image image={image} imageSharp={imageSharp} />
                      <RichText render={title} />
                      <div>
                        (<RichText render={text} />)
                      </div>
                      <img
                        className={style.arrow}
                        src={arrow.publicURL}
                        alt="arrow icon"
                        loading="lazy"
                      />
                      <div className={style.shadow}></div>
                    </Link>
                  </div>
                );
              }
            )}
          </Swiper>
        </div>
      </div>
    </BackgroundImage>
  );
};

Solutions.propTypes = {
  primary: object,
  fields: array,
};

export default Solutions;
