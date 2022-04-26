import React, { useState, useEffect } from 'react';
import Swiper from 'react-id-swiper';
import { RichText } from 'prismic-reactjs';
import { object, array } from 'prop-types';

import Dropdown from 'react-dropdown';
import Item from './components/Item';
import ArrowButton from '@components/ArrowButton/ArrowButton';
import style from './Works.module.scss';

const Works = ({ primary, items }) => {
  const { categories, title, dropdownlable } = primary;
  const categoryList = categories.text.split(/\s*,\s*/);
  const defaultCategory = categoryList[0];
  const [category, setCategory] = useState(defaultCategory);
  const [sorterWorks, setSorterWorks] = useState([]);

  useEffect(() => {
    setSorterWorks(
      items.filter((item) => {
        return item.category.text === category;
      })
    );
  }, [category]);

  const handleChangeCategory = ({ value }) => {
    setCategory(value);
  };

  const params = {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
    renderPrevButton() {
      return <ArrowButton type="prev" />;
    },
    renderNextButton() {
      return <ArrowButton type="next" />;
    },
    breakpoints: {
      768: {
        spaceBetween: 32,
      },
      1024: {
        spaceBetween: 64,
      },
    },
  };
  return (
    <div className={style.works}>
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.title}>
            <RichText render={title.richText} />
          </div>
          <div className={style.dropdown}>
            <div className={style.label}>
              <RichText render={dropdownlable.richText} />
            </div>
            <Dropdown
              options={categoryList}
              value={category}
              onChange={handleChangeCategory}
            />
          </div>
        </div>
        {sorterWorks.length > 0 && (
          <Swiper {...params} key={category}>
            {sorterWorks.map((item, index) => {
              return (
                <div className={style.slide} key={`works${index}`}>
                  <Item {...item} />
                </div>
              );
            })}
          </Swiper>
        )}
      </div>
    </div>
  );
};

Works.propTypes = {
  primary: object,
  items: array,
};

export default Works;
