import React from 'react';
import { object } from 'prop-types';

import Subscribe from '@components/Subscribe';
import Hero from './components/Hero/Hero';
import Articles from './components/Articles/Articles';
import BreadcrumbsSemanticMarkup from '@components/BreadcrumbsMarkup/BreadcrumbsMarkup';
import style from './BlogPage.module.scss';

const BlogPage = ({ content, canonical, metatitle }) => {
  const {
    title,
    buttontext,
    filtersbuttontext,
    placeholder,
    subtitle,
  } = content.allPrismicBlogpage.edges[0].node.data;
  const articlesList = content.allPrismicBlogpostpage.edges;
  const lastArticleData = articlesList[0].node.data.body;
  const subscribeSection = lastArticleData.find(
    (item) => item.slice_type === 'subscribe'
  );
  const { primary: subscribeSectionContent } = subscribeSection;

  React.useEffect(() => {
    console.log(content);
  }, []);

  return (
    <div className={style.HomePage}>
      <Hero
        title={title}
        articles={articlesList}
        filtersbuttontext={filtersbuttontext}
      />
      <Articles
        articlesList={articlesList}
        buttontext={buttontext}
        subtitle={subtitle}
        placeholder={placeholder}
        filtersbuttontext={filtersbuttontext}
      />
      <Subscribe primary={subscribeSectionContent} />
      <BreadcrumbsSemanticMarkup
        pageTitle={metatitle.text}
        pageUrl={canonical.text}
      />
    </div>
  );
};

BlogPage.propTypes = {
  content: object,
  canonical: object,
  metatitle: object,
  filtersbuttontext: object,
  placeholder: object,
  subtitle: object,
};

export default BlogPage;
