import React from 'react';
import style from './ArticlePreview.module.scss';
import { Link } from 'gatsby';
import { object, string } from 'prop-types';
import Arrow from './image/arrow.inline.svg';

const ArticlePreview = ({ image, title, text, tag, date }) => {
  return (
    <Link to="/" className={style.preview}>
      <div className={style.imagePreview}>
        <img src={image.publicURL} alt="" />
      </div>
      <div className={style.textBlock}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.text}>{text}</p>
        <div className={style.wrapper}>
          <p className={style.tag}>{tag}</p>
          <time className={style.date}>{date}</time>
        </div>
        <div className={style.arrow}>
          <Arrow />
        </div>
      </div>
    </Link>
  );
};

ArticlePreview.propTypes = {
  image: object,
  title: string,
  text: string,
  tag: string,
  date: string,
};

export default ArticlePreview;
