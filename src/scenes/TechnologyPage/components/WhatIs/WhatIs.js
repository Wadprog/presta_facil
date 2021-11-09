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
    buttontext,
    buttonlink,
  } = primary;
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image image={image} />
          <div className={styles.background}></div>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <RichText render={title.raw} />
          </div>
          <div className={styles.description}>
            <RichText render={description.raw} />
          </div>
          <div className={styles.subtitle}>
            <RichText render={subtitle.raw} />
          </div>
          <div className={styles.buttonWrapper}>
            <Button variant={VARIANT.PRIMARY} to={buttonlink.text} ignoreLang>
              <RichText render={buttontext.raw} />
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
