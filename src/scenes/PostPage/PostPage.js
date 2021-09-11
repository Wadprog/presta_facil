import React from 'react';
import PropTypes from 'prop-types';
import style from './PostPage.module.scss';
import { dateToString } from '@helpers';

import Text from './components/Text/Text';
import Img from './components/Img/Img';
import Video from './components/Video/Video';
import ArticleSemanticMarkup from './components/ArticleSemanticMarkup/ArticleSemanticMarkup';
import BreadcrumbsSemanticMarkup from '@components/BreadcrumbsMarkup/BreadcrumbsMarkup';
import Subscribe from '@components/Subscribe';
import CallToAction from '@components/CallToAction/CallToAction';

import Articles from '@components/Articles/Articles';

const PostPage = ({ current, tags, currentLanguage }) => {
  const { body, date, title, description, canonical, preview } = current;
  const baseItemName = 'Blog';
  const baseItemUrl = 'https://secureprivacy.ai/blog';

  return (
    <div className={style.page}>
      <div className={style.container}>
        <div className={style.wrapper}>
          <ul className={style.categoryList}>
            {tags.map((item) => {
              return (
                <li className={style.categoryItem} key={item}>
                  {item}
                </li>
              );
            })}
          </ul>
          <div className={style.date}>{dateToString(date)}</div>
        </div>
        <div className={style.title}>
          <h1>{title.text}</h1>
        </div>
        <div className={style.description}>
          <p>{description.text}</p>
        </div>
        {body.map((section, index) => {
          switch (section.slice_type) {
            case 'text':
              return (
                <Text {...section} key={`${section.slice_type}${index}`} />
              );
            case 'image':
              return <Img {...section} key={`${section.slice_type}${index}`} />;
            case 'video':
              return (
                <Video {...section} key={`${section.slice_type}${index}`} />
              );
          }
        })}
        <BreadcrumbsSemanticMarkup
          pageTitle={title.text}
          pageUrl={canonical.text}
          baseItemName={baseItemName}
          baseItemUrl={baseItemUrl}
        />
        <ArticleSemanticMarkup
          title={title.text}
          description={description.text}
          date={date}
          canonical={canonical.text}
          image={preview}
        />
      </div>
      {body.map((section, index) => {
        switch (section.slice_type) {
          case 'agencies':
            return (
              <CallToAction
                {...section}
                key={`${section.slice_type}${index}`}
              />
            );
          case 'subscribe':
            return (
              <Subscribe {...section} key={`${section.slice_type}${index}`} />
            );
          case 'articles':
            return (
              <Articles
                {...section}
                key={`${section.slice_type}${index}`}
                currentLanguage={currentLanguage}
              />
            );
        }
      })}
    </div>
  );
};

PostPage.propTypes = {
  current: PropTypes.object.isRequired,
  tags: PropTypes.array,
  currentLanguage: PropTypes.string,
};

export default PostPage;
