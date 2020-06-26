import React from 'react';
import PropTypes from 'prop-types';
import style from './PostPage.module.scss';
import { RichText } from 'prismic-reactjs';
import { dateToString, parseString } from '@helpers';

import Text from './components/Text/Text';
import Img from './components/Img/Img';
import Video from './components/Video/Video';
import Subscribe from '@components/Subscribe';
import CallToAction from '@components/CallToAction/CallToAction';

import Articles from '@components/Articles/Articles';

const PostPage = ({ current }) => {
  const { body, category, date, title, description } = current;
  return (
    <div className={style.page}>
      <div className={style.container}>
        <div className={style.wrapper}>
          <ul className={style.categoryList}>
            {category.map((item) => {
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
          <RichText render={description} />
        </div>
        {body.map((section, index) => {
          switch (section.type) {
            case 'text':
              return <Text {...section} key={`${section.type}${index}`} />;
            case 'image':
              return <Img {...section} key={`${section.type}${index}`} />;
            case 'video':
              return <Video {...section} key={`${section.type}${index}`} />;
          }
        })}
      </div>
      {body.map((section, index) => {
        switch (section.type) {
          case 'agencies':
            return (
              <CallToAction {...section} key={`${section.type}${index}`} />
            );
          case 'subscribe':
            return <Subscribe {...section} key={`${section.type}${index}`} />;
          case 'articles':
            return <Articles {...section} key={`${section.type}${index}`} />;
        }
      })}
    </div>
  );
};

PostPage.propTypes = {
  current: PropTypes.object.isRequired,
};

export default PostPage;
