import React, { useState, useEffect } from 'react';
import { array, object } from 'prop-types';
import { RichText } from 'prismic-reactjs';

import style from './Videos.module.scss';
import Button, { VARIANT } from '@components/Button/Button.js';
import Item from './components/Item/Item';
import { parseString } from '@helpers';
import { useDebounce } from '@hooks';
import SearchInput from '@components/SearchInput/SearchInput';
import Filter from '@components/Filter/Filter';

const numberToRender = 9;
const COUNTER_STEP = 3;

const Videos = ({ primary, items }) => {
  const validFields = items.filter(
    (field) => field.tag && field.date && field.title && field.videourl
  );
  const [counter, setCounter] = useState(numberToRender);
  const [videoList, setVideoList] = useState([]);
  const [search, setSearch] = useState();
  const [selectedTag, setSelectedTag] = useState(null);
  const [dateRange, setDateRange] = useState();
  const debounceSearchResult = useDebounce(search, 500);
  let tagList = [];
  validFields.forEach((element) => {
    tagList = [...tagList, ...element.tag.split(/\s*,\s*/)];
  });
  const uniqTagList = [...new Set(tagList)];
  useEffect(() => {
    const filteredList = validFields.filter(({ title, date, tag }) => {
      const filterBySearch = debounceSearchResult
        ? parseString(title.raw)
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
            <RichText render={title.raw} />
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
          {videoList.map((item, index) => {
            return <Item {...item} index={index} key={index} />;
          })}
        </div>
        <div className={style.buttonWrapper}>
          {validFields.length > counter && (
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
  items: array,
  primary: object,
};

export default Videos;
