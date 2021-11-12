import React from 'react';
import { object } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Image from '@components/Image/Image';
import styles from './Features.module.scss';

const Features = ({ primary }) => {
  const { title, description, image, list } = primary;
  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <RichText render={title.richText} />
      </div>
      <div className={styles.description}>
        <RichText render={description.richText} />
      </div>
      <div className={styles.container}>
        <div className={styles.listWrapper}>
          <RichText render={list.richText} />
        </div>
        <div className={styles.imageWrapper}>
          <Image image={image} />
        </div>
      </div>
    </section>
  );
};

Features.propTypes = {
  primary: object,
};

export default Features;
