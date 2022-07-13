import React, { useState, useEffect, useContext } from 'react';
import { array, object } from 'prop-types';
import style from './Articles.module.scss';
import Filter from '@components/Filter/Filter';
import Button, { VARIANT } from '@components/Button/Button.js';
import SearchInput from '@components/SearchInput/SearchInput';
import ArticlePreview from '@components/ArticlePreview';
import { useDebounce } from '@hooks';
import { parseString } from '@helpers';
import LangContext from '@contexts';
import { langPath } from '@helpers';
const numberToRender = 9; // started article on the page
const COUNTER_STEP = 3;
import { Link } from 'gatsby';

const Articles = ({
  articlesList,
  buttontext,
  subtitle,
  placeholder,
  filtersbuttontext,
  isCategory,
}) => {
  const [counter, setCounter] = useState(numberToRender);
  const [list, setList] = useState([]);
  const [search, setSearch] = useState();
  const [selectedTag, setSelectedTag] = useState(null);
  const [dateRange, setDateRange] = useState();
  const debounceSearchResult = useDebounce(search, 500);
  const currentLang = useContext(LangContext);

  let tagList = [];
  articlesList.forEach(({ node }) => {
    tagList = [...tagList, ...node.tags];
  });
  const uniqTagList = [...new Set(tagList)];

  useEffect(() => {
    if (
      isCategory &&
      Object.keys(isCategory) &&
      isCategory.type === 'category'
    ) {
      setSelectedTag([`${isCategory.uid.replaceAll('-', ' ').toLowerCase()}`]);
    }
    const filteredList = articlesList.filter(({ node }) => {
      const { data: postData, tags } = node;
      const { title, date } = postData;
      const filterBySearch = debounceSearchResult
        ? parseString(title.richText)
            .toLowerCase()
            .includes(debounceSearchResult.toLowerCase())
        : true;
      const filterByDate = dateRange
        ? dateRange.startDate <= Date.parse(date) &&
          Date.parse(date) <= dateRange.endDate
        : true;
      let filterByTag = true;
      if (selectedTag) {
        filterByTag = selectedTag
          ? selectedTag.some((f) => tags.join('').toLowerCase().includes(f))
          : true;
      }

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
        <div className={style.title}>{subtitle && subtitle.text}</div>
        <div className={style.search}>
          <SearchInput onChange={handleInputChange} placeholder={placeholder} />
        </div>
        <div className={style.filter}>
          <Filter
            tagList={uniqTagList}
            tagChange={handleTagChange}
            dateChange={handleDateRangeChange}
            filtersbuttontext={filtersbuttontext}
          />
        </div>
      </div>
      <div className={style.list}>
        {list.map((item) => {
          return <ArticlePreview {...item} key={item.node.uid} />;
        })}
      </div>
      <div className={style.buttonWrapper}>
        {articlesList.length > counter && list.length >= 9 && (
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
      <div className={style.wrappernoList}>
        {!list.length && (
          <>
            <h5> {`No blogposts were found with this tag 😥`} </h5>
            <div className={style.buttonWrapper}>
              <Link to={`${langPath(currentLang)}/blog`}>
                <Button
                  variant={VARIANT.TRANSPARENT}
                  element="button"
                  fullWidth
                >
                  Back to Blog
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

Articles.propTypes = {
  articlesList: array,
  buttontext: object,
  subtitle: object,
  placeholder: object,
  filtersbuttontext: object,
  isCategory: object,
};

export default Articles;
