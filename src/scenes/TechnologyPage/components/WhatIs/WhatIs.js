import React from 'react';
import { object } from 'prop-types';
import Button, { VARIANT } from '@components/Button/Button.js';
import { RichText } from 'prismic-reactjs';
import Image from '@components/Image/Image';
import styles from './WhatIs.module.scss';

const WhatIs = ({ primary }) => {
  const {
    title,
    description,
    subtitle,
    image,
    imageSharp,
    buttontext,
    buttonlink,
  } = primary;
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image imageSharp={imageSharp} image={image} />
          <div className={styles.background}></div>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <RichText render={title} />
          </div>
          <div className={styles.description}>
            <RichText render={description} />
          </div>
          <div className={styles.subtitle}>
            <RichText render={subtitle} />
          </div>
          <div className={styles.buttonWrapper}>
            <Button variant={VARIANT.PRIMARY} to={RichText.asText(buttonlink)}>
              <RichText render={primary.buttontext} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

WhatIs.propTypes = {
  primary: object,
};

export default WhatIs;
