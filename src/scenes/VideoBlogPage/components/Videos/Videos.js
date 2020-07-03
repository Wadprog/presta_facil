import React, { useState, useEffect } from 'react';
import { array, object } from 'prop-types';
import style from './Videos.module.scss';
import { RichText } from 'prismic-reactjs';
import Button, { VARIANT } from '@components/Button/Button.js';
import Item from './components/Item/Item';
import { parseString, debounce } from '@helpers';

const DEFAULT_VIDEO = 9; // video on page
const COUNTER_STEP = 3;

const Videos = ({ primary, fields }) => {
  const [counter, setCounter] = useState(DEFAULT_VIDEO);
  const [videoList, setVideoList] = useState([]);
  const [search, setSearch] = useState();
  useEffect(() => {
    setVideoList(fields.slice(0, counter));
  }, [counter]);

  const handleInputChange = (e) => {
    debounce(() => setSearch(e.target.value), 200);
    // setSearch(e.target.value);
  };
  const loadMoreVideo = () => {
    debounce(setCounter(counter + COUNTER_STEP), 2000);
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
            <input onChange={handleInputChange} />
            <span>{search}</span>
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
