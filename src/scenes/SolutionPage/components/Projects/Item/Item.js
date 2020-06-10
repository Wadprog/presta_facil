import React from 'react';
import styles from './Item.module.scss';
import { object, array } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Image from '@components/Image/Image';

const Item = ({ title, link, description, screenshot, screenshotSharp }) => {
  return (
    <div className={styles.item} key={link.url}>
      <div className={styles.content}>
        <RichText render={title} />
        <a href={link.url} target="_blank" rel="noopener noreferrer">
          {link.url.replace(/(^\w+:|^)\/\//, '')}
        </a>
        <RichText render={description} />
      </div>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          imageSharp={screenshotSharp}
          image={screenshot}
        />
      </div>
    </div>
  );
};

Item.propTypes = {
  title: array,
  link: object,
  description: array,
  screenshot: object,
  screenshotSharp: object,
};

export default Item;
