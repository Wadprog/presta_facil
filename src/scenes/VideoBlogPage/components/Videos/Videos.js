import React, { useState, useEffect } from 'react';
import { array, object } from 'prop-types';
import style from './Videos.module.scss';
import { RichText } from 'prismic-reactjs';
import Button, { VARIANT } from '@components/Button/Button.js';
import Item from './components/Item/Item';
import { parseString } from '@helpers';
import { useDebounce } from '@hooks';
import SearchInput from '@components/SearchInput/SearchInput';
import Filter from '@components/Filter/Filter';

const DEFAULT_VIDEO = 9; // video on page
const COUNTER_STEP = 3;

const Videos = ({ primary, fields }) => {
  const [counter, setCounter] = useState(DEFAULT_VIDEO);
  const [videoList, setVideoList] = useState([]);
  const [search, setSearch] = useState();
  const [selectedTag, setSelectedTag] = useState(null);
  const [dateRange, setDateRange] = useState();
  const debounceSearchResult = useDebounce(search, 500);
  let tagList = [];
  fields.forEach((element) => {
    tagList = [...tagList, ...element.tag.split(/\s*,\s*/)];
  });
  const uniqTagList = [...new Set(tagList)];
  useEffect(() => {
    const filteredList = fields.filter(({ title, date, tag }) => {
      const filterBySearch = debounceSearchResult
        ? parseString(title)
            .toLowerCase()
            .includes(debounceSearchResult.toLowerCase())
        : true;
      const filterByDate = dateRange
        ? dateRange.startDate <= Date.parse(date) &&
          Date.parse(date) <= dateRange.endDate
        : true;

      const filterByTag = selectedTag ? selectedTag.includes(tag) : true;

      return filterBySearch && filterByDate && filterByTag;
    });
    setVideoList(filteredList.slice(0, counter));
  }, [counter, debounceSearchResult, selectedTag, dateRange]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };
  const loadMoreVideo = () => {
    setCounter(counter + COUNTER_STEP);
  };
  const handleTagChange = (tag) => {
    setSelectedTag(tag);
  };
  const handleDateRangeChange = (value) => {
    setDateRange(value);
  };

  const { title } = primary;
  return (
    <div className={style.page}>
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.title}>
            <RichText render={title} />
          </div>
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
          {videoList.map((item) => {
            return <Item {...item} key={parseString(item.title)} />;
          })}
        </div>
        <div className={style.buttonWrapper}>
          {fields.length > counter && (
            <Button
              variant={VARIANT.TRANSPARENT}
              click={loadMoreVideo}
              element="button"
            >
              load more
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

Videos.propTypes = {
  fields: array,
  primary: object,
};

export default Videos;
