import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MomentPropTypes from 'react-moment-proptypes';
import BEMHelper from "react-bem-helper";
import './time-picker.scss';
import { scrollbar } from "../../../../../helpers";

const cls = new BEMHelper('time-picker');

export default class Index extends Component {
  static propTypes = {
    value: MomentPropTypes.momentObj.isRequired,
    minutesStep: PropTypes.number,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    defaultValue: '00:00',
    format: 'HH.mm',
    minutesStep: 5,
  };

  constructor(props) {
    super(props);

    const hours = [];
    const minutes = [];

    for (let i = 8; i < 24; i++) hours.push(i < 10 ? `0${i}` : `${i}`);
    for (let j = 0; j < 60; j += props.minutesStep) minutes.push(j < 10 ? `0${j}` : `${j}`);

    this.state = {
      error: false,
      isOpen: false,
      focused: false,
      time: {
        hours,
        minutes
      }
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentDidUpdate() {
    this.initScrollbars();
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    const domNode = this.node;

    if (!domNode || !domNode.contains(event.target)) {
      this.closeList();
    }
  };

  handleSelect = (val, type) => {
    const time = this.props.value;

    if (type === 'hour') time.hour(val);
    if (type === 'minute') time.minute(val);

    this.props.onChange(time);
    // if (type === 'minute') this.closeList();
  };

  initScrollbars = () => {
      scrollbar(this.hourList);
      scrollbar(this.minuteList);
  };

  toggleList = () => {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  };

  closeList = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { value } = this.props;
    const { time, isOpen } = this.state;

    return (
      <div {...cls()} ref={ref => this.node = ref}>
        <span
          {...cls('value')}  
          onClick={() => this.toggleList()}
        >{value.format('HH:mm')}</span>

        {isOpen && (
          <div {...cls('picker')}>
            <div {...cls('picker-panel')}>
              <ul {...cls('picker-list')} ref={ref => this.hourList = ref}>
                {time.hours.map(hour => (
                  <li
                    key={hour}
                    {...cls('picker-list-item', { active: hour === value.format('HH') })}
                    onClick={() => this.handleSelect(hour, 'hour')}
                  >{ hour }</li>
                ))}
              </ul>
            </div>

            <div {...cls('picker-panel')}>
              <ul {...cls('picker-list')} ref={ref => this.minuteList = ref}>
                {time.minutes.map(minute => (
                  <li
                    key={minute}
                    {...cls('picker-list-item',{ active: minute === value.format('mm') })}
                    onClick={() => this.handleSelect(minute, 'minute')}
                  >{ minute }</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
};
