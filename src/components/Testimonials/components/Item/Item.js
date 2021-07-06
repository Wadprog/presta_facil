import React from 'react';
import { RichText } from 'prismic-reactjs';
import { object } from 'prop-types';

import style from './Item.module.scss';
import Quote from './image/quote.inline.svg';
import Image from '@components/Image/Image';

const Item = ({ photo, name, company, text }) => {
  return (
    <div className={style.container}>
      <Quote className={style.quote} />
      <div className={style.user}>
        <Image image={photo} fluid={photo.fluid} className={style.photo} />
        <div className={style.name}>
          <RichText render={name.raw} />
        </div>
        <div className={style.position}>
          <RichText render={company.raw} />
        </div>
      </div>
      <div className={style.review}>
        <RichText render={text.raw} />
      </div>
    </div>
  );
};

Item.propTypes = {
  photo: object,
  name: object,
  company: object,
  text: object,
};

export default Item;
