import React, { useState, useEffect } from 'react';
import { array, object } from 'prop-types';
import style from './Articles.module.scss';
import Filter from '@components/Filter/Filter';
import Button, { VARIANT } from '@components/Button/Button.js';
import SearchInput from '@components/SearchInput/SearchInput';
import ArticlePreview from '@components/ArticlePreview';
import { useDebounce } from '@hooks';
import { parseString } from '@helpers';

const numberToRender = 6; // started article on the page
const COUNTER_STEP = 3;

const Articles = ({ articlesList, buttontext }) => {
  const [counter, setCounter] = useState(numberToRender);
  const [list, setList] = useState([]);
  const [search, setSearch] = useState();
  const [selectedTag, setSelectedTag] = useState(null);
  const [dateRange, setDateRange] = useState();
  const debounceSearchResult = useDebounce(search, 500);

  let tagList = [];
  articlesList.forEach(({ node }) => {
    tagList = [...tagList, ...node.tags];
  });
  const uniqTagList = [...new Set(tagList)];

  useEffect(() => {
    const filteredList = articlesList.filter(({ node }) => {
      const { data: postData, tags } = node;
      const { title, date } = postData;
      const filterBySearch = debounceSearchResult
        ? parseString(title.raw)
            .toLowerCase()
            .includes(debounceSearchResult.toLowerCase())
        : true;
      const filterByDate = dateRange
        ? dateRange.startDate <= Date.parse(date) &&
          Date.parse(date) <= dateRange.endDate
        : true;
      const filterByTag = selectedTag
        ? selectedTag.includes(tags.join(''))
        : true;

      return filterBySearch && filterByDate && filterByTag;
    });
    setList(filteredList.slice(0, counter));
  }, [counter, debounceSearchResult, selectedTag, dateRange]);

  const handleClickLoadMore = () => {
    setCounter(counter + COUNTER_STEP);
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleTagChange = (tag) => {
    setSelectedTag(tag);
  };
  const handleDateRangeChange = (value) => {
    setDateRange(value);
  };

  return (
    <section className={style.articles}>
      <div className={style.wrapper}>
        <div className={style.title}>Recent news</div>
        <div className={style.search}>
          <SearchInput onChange={handleInputChange} />
        </div>
        <div className={style.filter}>
          <Filter
            tagList={uniqTagList}
            tagChange={handleTagChange}
            dateChange={handleDateRangeChange}
          />
        </div>
      </div>
      <div className={style.list}>
        {list.map((item) => {
          return <ArticlePreview {...item} key={item.node.uid} />;
        })}
      </div>
      <div className={style.buttonWrapper}>
        {articlesList.length > counter && list.length >= 6 && (
          <Button
            variant={VARIANT.TRANSPARENT}
            click={handleClickLoadMore}
            element="button"
            fullWidth
          >
            {buttontext.text}
          </Button>
        )}
      </div>
    </section>
  );
};

Articles.propTypes = {
  articlesList: array,
  buttontext: object,
};

export default Articles;
