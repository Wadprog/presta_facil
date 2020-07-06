import React from 'react';
import Select from 'react-select';
import { array, func } from 'prop-types';
import style from './Filter.module.scss';

const Filter = ({ tagList, tagChange }) => {
  const handleChange = (value) => {
    tagChange(value);
  };

  let tagOptions = [];
  tagList.forEach((element) => {
    tagOptions = [...tagOptions, { value: element, label: element }];
  });
  return (
    <div className={style.container}>
      <div className={style.selectContainer}>
        <Select
          onChange={handleChange}
          options={tagOptions}
          isMulti
          isClearable={false}
          className={style.select}
          classNamePrefix="select"
        />
      </div>
    </div>
  );
};

Filter.propTypes = {
  tagList: array,
  tagChange: func,
};

export default Filter;
