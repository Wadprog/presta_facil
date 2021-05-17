import React from 'react';
import { RichText } from 'prismic-reactjs';
import { object, array } from 'prop-types';

import style from './Item.module.scss';
import Quote from './image/quote.inline.svg';
import Image from '@components/Image/Image';

const Item = ({ photo, photoSharp, name, company, text }) => {
  return (
    <div className={style.container}>
      <Quote className={style.quote} />
      <div className={style.user}>
        <Image image={photo} imageSharp={photoSharp} className={style.photo} />
        <div className={style.name}>
          <RichText render={name} />
        </div>
        <div className={style.position}>
          <RichText render={company} />
        </div>
      </div>
      <div className={style.review}>
        <RichText render={text} />
      </div>
    </div>
  );
};

Item.propTypes = {
  photo: object,
  photoSharp: object,
  name: array,
  company: array,
  text: array,
};

export default Item;
