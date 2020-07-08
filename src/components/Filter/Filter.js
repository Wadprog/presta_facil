import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { array, func } from 'prop-types';
import style from './Filter.module.scss';
import DatePicker from '@components/DatePicker/DatePicker';
import Button from './components/button/ButtonFilter';

const Filter = ({ tagList, tagChange }) => {
  const [dateRange, setDateRange] = useState(null);
  const handleChange = (value) => {
    const selectedValue = value ? value.map((item) => item.value) : value;
    tagChange(selectedValue);
  };

  const handleDateChange = (value) => {
    setDateRange(value);
  };

  useEffect(() => {}, [dateRange]);

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
      <div className={style.dateContainer}>
        <DatePicker onChange={handleDateChange} />
      </div>
      <div className={style.buttonWrapper}>
        <Button />
      </div>
    </div>
  );
};

Filter.propTypes = {
  tagList: array,
  tagChange: func,
};

export default Filter;
