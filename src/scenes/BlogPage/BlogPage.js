import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import style from './BlogPage.module.scss';
import ArticlePreview from '@components/ArticlePreview';
import Subscribe from '@components/Subscribe';
import SearchInput from '@components/SearchInput/SearchInput';
import Filter from '@components/Filter/Filter';

const BlogPage = ({ content }) => {
  const [search, setSearch] = useState();

  const body = content.prismic.allBlogpostpages.edges[0].node.body;
  const articlesList = content.prismic.allBlogpostpages.edges;
  let tagList = [];
  articlesList.forEach(({ _meta }) => {
    if (!_meta) {
      return;
    }
    tagList = [...tagList, ..._meta.tags];
  });
  console.log(tagList);

  useEffect(() => {}, [search]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className={style.HomePage}>
      <div className={style.articles}>
        <div className={style.wrapper}>
          <div className={style.title}>Recent news</div>
          <div className={style.search}>
            <SearchInput onChange={handleInputChange} />
          </div>
          <div className={style.filter}>
            <Filter
              tagList={[]}
              tagChange={() => {}}
              dateChange={() => {}}
              // tagChange={handleTagChange}
              // dateChange={handleDateRangeChange}
            />
          </div>
        </div>
        <div className={style.list}>
          {articlesList.map((item) => {
            return <ArticlePreview {...item} key={item.node._meta.uid} />;
          })}
        </div>
      </div>
      {body.map((section) => {
        switch (section.type) {
          case 'subscribe':
            return (
              <div className={style.subscribeWrapper}>
                <Subscribe {...section} key={section.type} />
              </div>
            );
        }
      })}
    </div>
  );
};

BlogPage.propTypes = {
  content: PropTypes.object.isRequired,
};

export default BlogPage;
