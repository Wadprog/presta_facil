import React, { useState, useEffect } from 'react';
import styles from './Features.module.scss';
import { RichText } from 'prismic-reactjs';
import { object, array } from 'prop-types';
import Swiper from 'react-id-swiper';
import { useBreakpoints } from '@hooks';
import Button, { VARIANT } from '@components/Button/Button.js';
import GatsbyImage from 'gatsby-image';

const Features = ({ primary, fields }) => {
  const [buildKey, setBuildKey] = useState();
  const { width } = useBreakpoints();
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
        spaceBetween: 48,
      },
      1150: {
        allowTouchMove: false,
        spaceBetween: 0,
      },
    },
  };
  return (
    <section className={styles.features}>
      <div className={styles.title}>
        <RichText render={primary.title} />
      </div>
      <Swiper {...params} key={buildKey}>
        {fields.map(({ image, imageSharp, title, description }, index) => {
          return (
            <div className={styles.slide} key={`solutions${index}`}>
              <GatsbyImage
                className={styles.image}
                fluid={imageSharp.childImageSharp.fluid}
                alt={image.alt}
              />
              <RichText render={title} />
              <RichText render={description} />
            </div>
          );
        })}
      </Swiper>
      <div className={styles.button}>
        <Button variant={VARIANT.TRANSPARENT}>
          {RichText.asText(primary.button)}
        </Button>
      </div>
    </section>
  );
};

Features.propTypes = {
  primary: object,
  fields: array,
};

export default Features;
