import React from 'react';
import { object } from 'prop-types';
import style from './BlogPage.module.scss';
import Subscribe from '@components/Subscribe';
import Hero from './components/Hero/Hero';
import Articles from './components/Articles/Articles';

const BlogPage = ({ content }) => {
  const { title } = content.allPrismicBlogpage.edges[0].node.data;
  const articlesList = content.allPrismicBlogpostpage.edges;
  const { allPrismicBlogpostpageBodySubscribe: subscribeSection } = content;
  const subscribeSectionContent = subscribeSection.edges[0].node.primary;

  return (
    <div className={style.HomePage}>
      <Hero title={title} articles={articlesList} />
      <Articles articlesList={articlesList} />
      <Subscribe primary={subscribeSectionContent} />
    </div>
  );
};

BlogPage.propTypes = {
  content: object.isRequired,
};

export default BlogPage;
