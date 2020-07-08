import React, { useState, useEffect, useRef } from 'react';
import { func } from 'prop-types';
import style from './DatePicker.module.scss';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format, getMilliseconds } from 'date-fns';

const selectionRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection',
};

const DatePicker = ({ onChange }) => {
  const [state, setState] = useState([selectionRange]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isOpenDatePicker, setIsOpenDatePicker] = useState(false);

  const handleSelect = ({ selection }) => {
    setState([
      {
        startDate: selection.startDate,
        endDate: selection.endDate,
        key: 'selection',
      },
    ]);
    setStartDate(format(selection.startDate, 'MMM dd'));
    setEndDate(format(selection.endDate, 'MMM dd'));
    onChange({
      startDate: getMilliseconds(selection.startDate),
      endDate: getMilliseconds(selection.endDate),
    });
  };
  const wrapper = useRef();
  const button = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpenDatePicker]);

  const handleDateClick = () => {
    setIsOpenDatePicker(!isOpenDatePicker);
  };

  const handleOutsideClick = (e) => {
    if (
      (wrapper.current && wrapper.current.contains(e.target)) ||
      button.current.contains(e.target)
    ) {
      return;
    }
    setIsOpenDatePicker(false);
  };

  return (
    <div className={style.container}>
      <button className={style.date} onClick={handleDateClick} ref={button}>
        {startDate && endDate && (
          <span>
            {startDate} - {endDate}
          </span>
        )}
      </button>
      {isOpenDatePicker && (
        <div className={style.wrapper} ref={wrapper}>
          <DateRangePicker
            moveRangeOnFirstSelection={false}
            months={1}
            ranges={state}
            direction="horizontal"
            onChange={handleSelect}
            showSelectionPreview={false}
            showMonthAndYearPickers={false}
            showDateDisplay={false}
            rangeColors={['#24B04B']}
          />
        </div>
      )}
    </div>
  );
};

DatePicker.propTypes = {
  onChange: func,
};

export default DatePicker;
