import React from 'react';
import styles from './Benefits.module.scss';
import { RichText } from 'prismic-reactjs';
import { object, array } from 'prop-types';
import Button, { VARIANT } from '@components/Button/Button.js';

const Benefits = ({ primary, items }) => {
  const { title, buttonlink, button } = primary;
  return (
    <section className={styles.benefits}>
      <div className={styles.container}>
        <div className={styles.title}>
          <RichText render={title.raw} />
        </div>
        <div className={styles.list}>
          {items.map(({ image, text }) => {
            return (
              <div className={styles.item} key={image.url}>
                <div className={styles.imageWrapper}>
                  <img src={image.url} alt={image.alt} loading="lazy" />
                </div>
                <RichText render={text.raw} />
              </div>
            );
          })}
        </div>
        <div className={styles.button}>
          <Button variant={VARIANT.WHITE} to={buttonlink.text}>
            <span>{button.text}</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

Benefits.propTypes = {
  primary: object,
  items: array,
};
export default Benefits;
