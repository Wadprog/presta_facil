import React from 'react';
import { object } from 'prop-types';
import style from './BlogPage.module.scss';
import Subscribe from '@components/Subscribe';
import Hero from './components/Hero/Hero';
import Articles from './components/Articles/Articles';

const BlogPage = ({ content }) => {
  const body = content.prismic.allBlogpostpages.edges[0].node.body;
  const title = content.prismic.allBlogpages.edges[0].node;
  const articlesList = content.prismic.allBlogpostpages.edges;

  return (
    <div className={style.HomePage}>
      <Hero title={title} articles={articlesList} />
      <Articles articlesList={articlesList} />
      {body.map((section) => {
        switch (section.type) {
          case 'subscribe':
            return (
              <div className={style.subscribeWrapper} key={section.type}>
                <Subscribe {...section} />
              </div>
            );
          default:
            return;
        }
      })}
    </div>
  );
};

BlogPage.propTypes = {
  content: object.isRequired,
};

export default BlogPage;
