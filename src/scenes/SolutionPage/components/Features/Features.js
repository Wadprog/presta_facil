import React, { useState, useEffect } from 'react';
import styles from './Features.module.scss';
import { RichText } from 'prismic-reactjs';
import { object, array } from 'prop-types';
import Swiper from 'react-id-swiper';
import { useBreakpoints } from '@hooks';
import Button, { VARIANT } from '@components/Button/Button.js';
import Image from '@components/Image/Image';

const Features = ({ primary, items }) => {
  const [buildKey, setBuildKey] = useState();
  const { width } = useBreakpoints();
  useEffect(() => {
    setBuildKey(+new Date());
  }, [width]);

  const { title, button, buttonlink } = primary;

  const params = {
    slidesPerView: 'auto',
    spaceBetween: 24,
    breakpoints: {
      768: {
        spaceBetween: 32,
      },
      992: {
        spaceBetween: 48,
      },
      1150: {
        allowTouchMove: false,
        spaceBetween: 20,
      },
    },
  };
  return (
    <section className={styles.features}>
      <div className={styles.title}>
        <RichText render={title.richText} />
      </div>
      <Swiper {...params} key={buildKey}>
        {items.map(({ image, imageSharp, title, description }, index) => {
          return (
            <div className={styles.slide} key={`solutions${index}`}>
              <Image
                className={styles.image}
                imageSharp={imageSharp}
                image={image}
              />
              <RichText render={title.richText} />
              <RichText render={description.richText} />
            </div>
          );
        })}
      </Swiper>
      <div className={styles.button}>
        <Button variant={VARIANT.TRANSPARENT} to={buttonlink.text}>
          {button.text}
        </Button>
      </div>
    </section>
  );
};

Features.propTypes = {
  primary: object,
  items: array,
};

export default Features;
