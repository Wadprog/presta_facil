import React from 'react';
import styles from './Benefits.module.scss';
import { RichText } from 'prismic-reactjs';
import { object, array } from 'prop-types';
import Button, { VARIANT } from '@components/Button/Button.js';

const Benefits = ({ primary, fields }) => {
  console.log(primary);
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
                  <img src={image.url} alt={image.alt} />
                </div>
                <RichText render={text} />
              </div>
            );
          })}
        </div>
        <div className={styles.button}>
          <Button variant={VARIANT.WHITE}>
            {RichText.asText(primary.button)}
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
