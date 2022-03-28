import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { object } from 'prop-types';

import { dateToString, parseString, langPath } from '@helpers';
import Image from '@components/Image/Image';
import LangContext from '@contexts';
import style from './ArticlePreview.module.scss';
import Arrow from './image/arrow.inline.svg';

const ArticlePreview = ({ node }) => {
  const { data: postData, tags, uid: postPath } = node;
  const { title, description, date, preview } = postData;
  const currentLang = useContext(LangContext);
  const link = `${langPath(currentLang)}/blog/${postPath}`;

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
        <h3 className={style.title}>{parseString(title.richText)}</h3>
        <p className={style.text}>{parseString(description.richText)}</p>
        <div className={style.wrapper}>
          <ul className={style.categoryList}>
            {tags.map((item, index) => {
              return (
                <li className={style.tag} key={`${item}${index}`}>
                  <span>{item}</span>
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
