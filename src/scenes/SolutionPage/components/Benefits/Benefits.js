import React from 'react';
import styles from './Benefits.module.scss';
import { RichText } from 'prismic-reactjs';
import { object, array } from 'prop-types';
import Button, { VARIANT } from '@components/Button/Button.js';

const Benefits = ({ primary, fields }) => {
  return (
    <section className={styles.benefits}>
      <div className={styles.container}>
        <div className={styles.title}>
          <RichText render={primary.title} />
        </div>
        <div className={styles.list}>
          {fields.map(({ image, text }) => {
            return (
              <div className={styles.item} key={image.url}>
                <div className={styles.imageWrapper}>
                  <img src={image.url} alt={image.alt} loading="lazy" />
                </div>
                <RichText render={text} />
              </div>
            );
          })}
        </div>
        <div className={styles.button}>
          <Button variant={VARIANT.WHITE}>
            <span>{RichText.asText(primary.button)}</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

Benefits.propTypes = {
  primary: object,
  fields: array,
};
export default Benefits;
