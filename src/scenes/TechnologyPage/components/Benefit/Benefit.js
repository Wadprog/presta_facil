import React from 'react';
import { object, array } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Image from '@components/Image/Image';
import styles from './Benefit.module.scss';

const Benefit = ({ primary, items }) => {
  const { title, description, subtitle, image } = primary;
  return (
    <section className={styles.benefit}>
      <div className={styles.background}>
        <Image image={image} />
      </div>
      <div className={styles.container}>
        <div className={styles.title}>
          <RichText render={title.raw} />
        </div>
        <div className={styles.description}>
          <RichText render={description.raw} />
        </div>
        <div className={styles.subtitle}>
          <RichText render={subtitle.raw} />
        </div>
        <ul className={styles.list}>
          {items.map(({ image, text }, index) => {
            const key = index;
            return (
              <li className={styles.item} key={key}>
                <div className={styles.imageWrapper}>
                  <Image image={image} />
                </div>
                <RichText render={text.raw} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

Benefit.propTypes = {
  primary: object,
  items: array,
};

export default Benefit;
