import React from 'react';
import { array, object } from 'prop-types';
import { RichText } from 'prismic-reactjs';

import Image from '@components/Image/Image';
import Arrow from './image/arrow.inline.svg';
import style from './Books.module.scss';

const Books = ({ items, pagetitle }) => {
  return (
    <div className={style.page}>
      <div className={style.headlineContainer}>
        <RichText render={pagetitle.raw} />
      </div>
      <div className={style.container}>
        {items.map(({ image, buttontext, bookpageurl }) => (
          <a
            href={bookpageurl.text}
            className={style.book}
            key={bookpageurl.text}
          >
            <Image image={image} fluid={image.fluid} />
            <div className={style.buttonWrapper}>
              <div className={style.button}>
                {buttontext.text}
                <Arrow />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

Books.propTypes = {
  items: array,
  pagetitle: object,
};

export default Books;
