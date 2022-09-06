import React from 'react';
import { RichText } from 'prismic-reactjs';
import { object } from 'prop-types';

import style from './Item.module.scss';
import Image from '@components/Image/Image';

const Item = ({ image, text, title }) => {
  return (
    <>
      <div className={style.title}>
        <RichText render={title.richText} />
      </div>
      <div className={style.text}>
        <RichText render={text.richText} />
      </div>
      <div className={style.imageWrapper}>
        <Image image={image} className={style.image} />
      </div>
    </>
  );
};
Item.propTypes = {
  image: object,
  text: object,
  title: object,
  pagename: object,
  buttontext: object,
};

export default Item;
