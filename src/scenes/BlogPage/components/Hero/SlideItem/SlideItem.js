import React, { useContext } from 'react';
import { array, object, string } from 'prop-types';
import style from './SlideItem.module.scss';
import { RichText } from 'prismic-reactjs';
import { dateToString, langPath } from '@helpers';
import { Link } from 'gatsby';
import LangContext from '@contexts';

const SlideItem = ({ backgroundpreview, title, date, description, _meta }) => {
  const currentLang = useContext(LangContext);
  console.log('prew', currentLang)
  return (
    <div className={style.item}>
      {backgroundpreview ? (
        <img
          className={style.preview}
          src={backgroundpreview.url}
          alt={backgroundpreview.alt}
          loading="lazy"
        />
      ) : (
        <div className={style.placeholder}></div>
      )}
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.title}>
            <RichText render={title} />
          </div>
          <div className={style.block}>
            <ul className={style.categoryList}>
              {_meta.tags.map((item, index) => {
                return (
                  <li className={style.tag} key={`${item}${index}`}>
                    {item}
                  </li>
                );
              })}
            </ul>
            <p className={style.date}>{dateToString(date)}</p>
          </div>
        </div>
        <div className={style.description}>
          <RichText render={description} />
        </div>
        <Link
          className={style.link}
          to={langPath(currentLang) + '/blog/' + _meta.uid}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

SlideItem.propTypes = {
  backgroundpreview: object,
  title: array,
  date: string,
  description: array,
  _meta: object,
};

export default SlideItem;
