import React from 'react';
import { object, array } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Image from '@components/Image/Image';
import styles from './Benefit.module.scss';

const Benefit = ({ primary, fields }) => {
  const { title, description, subtitle, image } = primary;
  console.log(primary);
  return (
    <section className={styles.benefit}>
      <div className={styles.background}>
        <img src={image.url} alt="background" />
      </div>
      <div className={styles.container}>
        <div className={styles.title}>
          <RichText render={title} />
        </div>
        <div className={styles.description}>
          <RichText render={description} />
        </div>
        <div className={styles.subtitle}>
          <RichText render={subtitle} />
        </div>
        <ul className={styles.list}>
          {fields.map(({ image, imageSharp, text }) => {
            const key = text[0].text;
            return (
              <li className={styles.item} key={key}>
                <div className={styles.imageWrapper}>
                  <Image imageSharp={imageSharp} image={image} />
                </div>
                <RichText render={text} />
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
  fields: array,
};

export default Benefit;
