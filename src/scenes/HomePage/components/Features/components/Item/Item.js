import React from 'react';
import { Link } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import { object, string, array } from 'prop-types';
import style from './Item.module.scss';
import Arrow from '../../image/arrow.inline.svg';

const Item = ({ image, text }) => {
  return (
    <Link to="/" className={style.link}>
      <div className={style.item}>
        <img className={style.image} src={image.url} alt={image.alt} />
        <div className={style.container}>
          <div className={style.title}>
            <RichText render={text} />
          </div>
          <div className={style.arrowContainer}>
            <Arrow className={style.arrow} />
          </div>
        </div>
      </div>
    </Link>
  );
};
Item.propTypes = {
  image: object,
  link: string,
  text: array,
};

export default Item;
