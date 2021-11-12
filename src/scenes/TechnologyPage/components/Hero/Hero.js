import React from 'react';
import { object } from 'prop-types';
import { RichText } from 'prismic-reactjs';

import Button, { VARIANT } from '@components/Button/Button.js';
import Image from '@components/Image/Image';
import styles from './Hero.module.scss';

const Hero = ({ primary }) => {
  const {
    buttonlink: buttonLink,
    title,
    description,
    buttontext: buttonText,
    image,
  } = primary;

  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>
            <RichText render={title.richText} />
          </div>
          <div className={styles.descr}>
            <RichText render={description.richText} />
          </div>
          <div className={styles.buttonWrapper}>
            <Button variant={VARIANT.PRIMARY} to={buttonLink.text}>
              <RichText render={buttonText.richText} />
            </Button>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image className={styles.image} image={image} />
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  primary: object,
};

export default Hero;
