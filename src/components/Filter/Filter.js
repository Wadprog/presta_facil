import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { array, func } from 'prop-types';
import style from './Filter.module.scss';
import DatePicker from '@components/DatePicker/DatePicker';
import ButtonFilter from './components/button/ButtonFilter';
import Button, { VARIANT } from '@components/Button/Button.js';

const Filter = ({ tagList, tagChange, dateChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (value) => {
    const selectedValue = value ? value.map((item) => item.value) : null;
    tagChange(selectedValue);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {}, [isOpen]);

  let tagOptions = [];
  tagList.forEach((element) => {
    tagOptions = [...tagOptions, { value: element, label: element }];
  });

  return (
    <div className={style.container}>
      {isOpen ? (
        <>
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
            <DatePicker onChange={dateChange} />
          </div>
          <div className={style.closeButton}>
            <Button
              variant={VARIANT.TRANSPARENT}
              element="button"
              fullWidth
              click={handleClick}
            >
              Cancel Filter
            </Button>
          </div>
        </>
      ) : (
        <div className={style.buttonWrapper}>
          <ButtonFilter onClick={handleClick} />
        </div>
      )}
    </div>
  );
};

Filter.propTypes = {
  tagList: array,
  tagChange: func,
  dateChange: func,
};

export default Filter;
