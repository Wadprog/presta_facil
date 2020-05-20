import React from 'react';
import { Link } from 'gatsby';
import { object, string } from 'prop-types';
import style from './Item.module.scss';
import Arrow from '../../image/arrow.inline.svg';

const Item = ({ image, link, title }) => {
  return (
    <Link to={link} className={style.link}>
      <div className={style.item}>
        <img className={style.image} src={image.publicURL} alt="/" />
        <div className={style.container}>
          <h4 className={style.title}>{title}</h4>
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
  title: string,
};

export default Item;
