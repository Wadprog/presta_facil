import React from 'react';
import { object } from 'prop-types';

import Subscribe from '@components/Subscribe';
import Hero from './components/Hero/Hero';
import Articles from './components/Articles/Articles';
import BreadcrumbsSemanticMarkup from '@components/BreadcrumbsMarkup/BreadcrumbsMarkup';
import style from './BlogPage.module.scss';

const BlogPage = ({ content, canonical, metatitle }) => {
  const { title } = content.allPrismicBlogpage.edges[0].node.data;
  const articlesList = content.allPrismicBlogpostpage.edges;
  const { allPrismicBlogpostpageBodySubscribe: subscribeSection } = content;
  const subscribeSectionContent = subscribeSection.edges[0].node.primary;

  return (
    <div className={style.HomePage}>
      <Hero title={title} articles={articlesList} />
      <Articles articlesList={articlesList} />
      <Subscribe primary={subscribeSectionContent} />
      <BreadcrumbsSemanticMarkup
        pageTitle={metatitle.text}
        pageUrl={canonical.text}
      />
    </div>
  );
};

BlogPage.propTypes = {
  content: object.isRequired,
  canonical: object.isRequired,
  metatitle: object.isRequired,
};

export default BlogPage;
