import React from 'react';
import { object, array } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Button, { VARIANT } from '@components/Button/Button.js';
import Image from '@components/Image/Image';
import styles from './Hero.module.scss';

const Hero = ({ primary }) => {
  const buttonLink = primary.buttonlink[0].text;
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>
            <RichText render={primary.title} />
          </div>
          <div className={styles.descr}>
            <RichText render={primary.description} />
          </div>
          <div className={styles.buttonWrapper}>
            <Button variant={VARIANT.PRIMARY} to={buttonLink}>
              <RichText render={primary.buttontext} />
            </Button>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            imageSharp={primary.imageSharp}
            image={primary.image}
          />
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  primary: object,
  fields: array,
};

export default Hero;
