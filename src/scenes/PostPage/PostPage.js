import React from 'react';
import PropTypes from 'prop-types';
import style from './PostPage.module.scss';
import { RichText } from 'prismic-reactjs';
import { dateToString, parseString } from '@helpers';

import Text from './components/Text/Text';
import Img from './components/Img/Img';

const PostPage = ({ current }) => {
  const { body, category, date, title, descrition } = current;
  return (
    <div className={style.page}>
      <div className={style.container}>
        <div className={style.wrapper}>
          <ul className={style.categoryList}>
            {category.map((item) => {
              console.log(item);
              const tag = parseString(item.tag);
              return (
                <li className={style.categoryItem} key={tag}>
                  {tag}
                </li>
              );
            })}
          </ul>
          <div className={style.date}>{dateToString(date)}</div>
        </div>
        <div className={style.title}>
          <RichText render={title} />
        </div>
        <div className={style.description}>
          <RichText render={descrition} />
        </div>
        {body.map((section, index) => {
          switch (section.type) {
            case 'text':
              return <Text {...section} key={`${section.type}${index}`} />;
            case 'image':
              return <Img {...section} key={`${section.type}${index}`} />;
          }
        })}
      </div>
    </div>
  );
};

PostPage.propTypes = {
  current: PropTypes.object.isRequired,
};

export default PostPage;
