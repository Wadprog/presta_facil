import React from 'react';
import { object, string } from 'prop-types';
import style from './Item.module.scss';
import Quote from './image/quote.inline.svg';

const Item = ({ photo, name, position, review }) => {
  return (
    <div className={style.container}>
      <Quote className={style.quote} />
      <div className={style.user}>
        <img
          className={style.photo}
          src={photo.publicURL}
          alt="reviewer photo"
        />
        <span className={style.name}>{name}</span>
        <span className={style.position}>{position}</span>
      </div>
      <p
        className={style.review}
        dangerouslySetInnerHTML={{ __html: review }}
      ></p>
    </div>
  );
};
Item.propTypes = {
  photo: object,
  name: string,
  position: string,
  review: string,
};

export default Item;
