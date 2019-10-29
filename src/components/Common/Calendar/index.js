import React, { useState } from 'react';
import BEMHelper from 'react-bem-helper';
import { DayPickerSingleDateController } from 'react-dates';
import { moment } from '../../../helpers/moment';
import TimePicker from './components/TimePicker';
import 'react-dates/initialize';
import './calendar.scss';

const arrowIcon = require('./svg-icons/left-arrow.svg');
const cls = new BEMHelper('calendar');
const prevNav = (
    <button className='calendar__prev-button'>
      <img src={arrowIcon} alt="<"/>
    </button>
);
const nextNav = (
    <button className='calendar__next-button'>
      <img src={arrowIcon} alt="<"/>
    </button>
);
const defaultTime = {
  startTime: moment().startOf('day'),
  endTime: moment().endOf('day')
};


function Calendar({ selected, onSelect }) {
  const [time, setTime] = useState(defaultTime);
  const [focused, setFocused] = useState(true);
  const today = moment();

  return (
    <div {...cls('')}>
      <section {...cls('header')}>
        <div {...cls('header-label')}>Сегодня</div>
        <div {...cls('header-year')}>{today.format('YYYY')}</div>
        <div {...cls('header-month')}>{today.format('MMMM D')}</div>

        <div {...cls('time-range-picker')}>
          <img src={require('./svg-icons/clock.svg')} alt='' {...cls('time-range-picker-icon')}/>
          <div {...cls('time-range-picker-row')}>
            <TimePicker
              value={time.startTime}
              onChange={startTime => setTime({ ...time, startTime } )}
            />
            {' - '}
            <TimePicker
              value={time.endTime}
              onChange={endTime => setTime({ ...time, endTime } )}
            />
          </div>
        </div>
      </section>

      <section {...cls('body')}>
        <DayPickerSingleDateController
          navPrev={prevNav}
          navNext={nextNav}
          date={selected}
          onDateChange={onSelect}
          onFocusChange={({ focused }) => setFocused(focused)}
          focused={focused}
          hideKeyboardShortcutsPanel
          enableOutsideDays={false}
          numberOfMonths={1}
          firstDayOfWeek={1}
          noBorder
        />
      </section>

      <section {...cls('footer')}>
        <button {...cls('footer-button')}>cancel</button>
        <button {...cls('footer-button')}>ok</button>
      </section>
    </div>
  );
}

export default Calendar;
