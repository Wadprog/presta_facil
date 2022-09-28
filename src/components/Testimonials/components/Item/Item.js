import React from 'react';
import { RichText } from 'prismic-reactjs';
import { bool, object } from 'prop-types';

import style from './Item.module.scss';
import Quote from './image/quote.inline.svg';
import Image from '@components/Image/Image';

const Item = ({ photo, name, company, text, isModal }) => {
  return (
    <div className={`${style.container} ${isModal && style.containerModal}`}>
      <Quote className={style.quote} />
      <div className={style.user}>
        <Image image={photo} className={style.photo} />
        <div className={style.name}>
          <RichText render={name.richText} />
        </div>
        <div className={style.position}>
          <RichText render={company.richText} />
        </div>
      </div>
      <div className={style.review}>
        <RichText render={text.richText} />
      </div>
    </div>
  );
};

Item.propTypes = {
  photo: object,
  name: object,
  company: object,
  text: object,
  isModal: bool,
};

export default Item;
