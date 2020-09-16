import React from 'react';

import types from 'prop-types';
import DatePicker from 'react-datepicker';
import { setMinutes, setHours } from 'date-fns';

import './styles.scss';

export default function InputDateTime({
  startDate,
  onChange,
  selected,
  calendarContainer,
  minDate,
  showTimeSelect,
  showTimeSelectOnly,
  timeIntervals,
  dateFormat,
  placeholderText,
}) {
  return (
    <div className="input-date-time">
      <DatePicker
        placeholderText={placeholderText}
        closeOnScroll={(e) => e.target === document}
        selected={selected}
        onChange={onChange}
        startDate={startDate}
        minDate={minDate}
        calendarContainer={calendarContainer}
        showTimeSelect={showTimeSelect}
        showTimeSelectOnly={showTimeSelectOnly}
        timeIntervals={timeIntervals}
        dateFormat={dateFormat}
        minTime={setHours(setMinutes(new Date(), 0), 10)}
        maxTime={setHours(setMinutes(new Date(), 30), 21)}
      />
    </div>
  );
}

InputDateTime.propTypes = {
  startDate: types.objectOf(types.string),
  selected: types.objectOf(types.string),
  minDate: types.objectOf(types.string),
  onChange: types.func,
  calendarContainer: types.func,
  dateFormat: types.string,
  placeholderText: types.string,
  timeIntervals: types.number,
  showTimeSelect: types.bool,
  showTimeSelectOnly: types.bool,
};

InputDateTime.defaultProps = {
  dateFormat: 'MMMM d, yyyy',
  timeIntervals: 15,
  showTimeSelect: false,
  showTimeSelectOnly: false,
};
