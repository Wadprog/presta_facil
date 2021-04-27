import React from 'react';
import { array } from 'prop-types';
import { parseString } from '@helpers';
import Image from '@components/Image/Image';

import Arrow from './image/arrow.inline.svg';
import style from './Books.module.scss';

const Books = ({ fields }) => {
  return (
    <div className={style.page}>
      <div className={style.container}>
        {fields.map(({ image, imageSharp, buttontext, bookpageurl }) => (
          <a
            href={parseString(bookpageurl)}
            className={style.book}
            key={parseString(bookpageurl)}
          >
            <Image image={image} imageSharp={imageSharp} />
            <div className={style.buttonWrapper}>
              <div className={style.button}>
                {parseString(buttontext)}
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
  fields: array,
};

export default Books;
