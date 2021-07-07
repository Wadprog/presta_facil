import React from 'react';
import styles from './Item.module.scss';
import { object } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Image from '@components/Image/Image';

const Item = ({ title, link, description, screenshot }) => {
  return (
    <div className={styles.item} key={link.url}>
      <div className={styles.content}>
        <RichText render={title.raw} />
        <a href={link.url} target="_blank" rel="noopener noreferrer">
          {link.url.replace(/(^\w+:|^)\/\//, '')}
        </a>
        <RichText render={description.raw} />
      </div>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          fluid={screenshot.fluid}
          image={screenshot}
        />
      </div>
    </div>
  );
};

Item.propTypes = {
  title: object,
  link: object,
  description: object,
  screenshot: object,
  screenshotSharp: object,
};

export default Item;
