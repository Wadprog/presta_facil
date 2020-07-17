import React, { useState, useEffect } from 'react';
import style from './Works.module.scss';
import Dropdown from 'react-dropdown';
import Item from './components/Item';
import Swiper from 'react-id-swiper';
import { RichText } from 'prismic-reactjs';
import { object, array } from 'prop-types';
import ArrowButton from '@components/ArrowButton/ArrowButton';

const Works = ({ primary, fields }) => {
  const categoryList = primary.categories[0].text.split(/\s*,\s*/);
  const defaultCategory = categoryList[0];
  const [category, setCategory] = useState(defaultCategory);
  const [sorterWorks, setSorterWorks] = useState(fields);

  useEffect(() => {
    setSorterWorks(
      fields.filter((item) => {
        return item.category[0].text === category;
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
            <RichText render={primary.title} />
          </div>
          <div className={style.dropdown}>
            <div className={style.label}>
              <RichText render={primary.dropdownlable} />
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
  fields: array,
};

export default Works;
