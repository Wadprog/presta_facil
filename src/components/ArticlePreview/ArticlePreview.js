import React from 'react';
import style from './ArticlePreview.module.scss';
import { Link } from 'gatsby';
import { object } from 'prop-types';
import Arrow from './image/arrow.inline.svg';
import { dateToString, parseString } from '@helpers';
import Image from '@components/Image/Image';

const ArticlePreview = ({ node }) => {
  const { title, description, date, _meta, preview } = node;
  const link = `/blog/${_meta.uid}`;
  const tags = _meta.tags;
  return (
    <Link to={link} className={style.preview}>
      <div className={style.imagePreview}>
        {preview ? (
          <Image image={preview} />
        ) : (
          <div className={style.placeholder}></div>
        )}
      </div>
      <div className={style.textBlock}>
        <h3 className={style.title}>{parseString(title)}</h3>
        <p className={style.text}>{parseString(description)}</p>
        <div className={style.wrapper}>
          <ul className={style.categoryList}>
            {tags.map((item, index) => {
              return (
                <li className={style.tag} key={`${item}${index}`}>
                  {item}
                </li>
              );
            })}
          </ul>
          <time className={style.date}>{dateToString(date)}</time>
        </div>
        <div className={style.arrow}>
          <Arrow />
        </div>
      </div>
    </Link>
  );
};

ArticlePreview.propTypes = {
  node: object,
};

export default ArticlePreview;
