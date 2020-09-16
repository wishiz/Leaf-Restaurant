import React from 'react';

import types from 'prop-types';
import { CalendarContainer } from 'react-datepicker';

import './styles.scss';

export default function CalendarDatepicker({ children }) {
  return (
    <div className="calendar-datepicker">
      <CalendarContainer>{children}</CalendarContainer>
    </div>
  );
}

CalendarDatepicker.propTypes = {
  children: types.node.isRequired,
};
