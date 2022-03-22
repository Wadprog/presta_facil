import React, { useContext } from 'react';
import { RichText } from 'prismic-reactjs';
import { Link } from 'gatsby';
import { array, func, object, string } from 'prop-types';

import { dateToString, langPath } from '@helpers';
import LangContext from '@contexts';
import style from './SlideItem.module.scss';

const SlideItem = ({ data, uid: itemPath }) => {
  const { backgroundpreview, title, date, description } = data;
  const currentLang = useContext(LangContext);

  return (
    <div className={style.item}>
      {backgroundpreview.url ? (
        <img
          className={style.preview}
          src={backgroundpreview.url}
          alt={backgroundpreview.alt}
        />
      ) : (
        <div className={style.placeholder}></div>
      )}
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.title}>
            <h2>{title.richText}</h2>
          </div>
          <div className={style.block}>
            {/* <ul className={style.categoryList}>
              {tags.map((item, index) => {
                return (
                  <li className={style.tag} key={`${item}${index}`}>
                    {item}
                  </li>
                );
              })}
            </ul> */}
            <p className={style.date}>{dateToString(date)}</p>
          </div>
        </div>
        <div className={style.description}>
          <RichText render={description.richText} />
        </div>
        <Link
          className={style.link}
          to={langPath(currentLang) + '/blog/' + itemPath}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

SlideItem.propTypes = {
  data: object,
  tags: array,
  uid: string,
  getFixedTitle: func,
};

export default SlideItem;
