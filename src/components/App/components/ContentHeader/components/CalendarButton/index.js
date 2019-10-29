import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TimeIcon } from '../../svg-icons/TimeIcon';
import Calendar from '../../../../../Common/Calendar';
import BEMHelper from 'react-bem-helper';
import { moment } from '../../../../../../helpers/moment';
import './calendar-button.scss';

const cls = new BEMHelper('calendar-button');

export default class CalendarButton extends Component {
    static propTypes = {
        className: PropTypes.string,
        selectedDate: PropTypes.object,
        onSelectDate: PropTypes.func.isRequired,
    };

    static defaultProps = {
        selectedDate: moment()
    };

    state = {
        isShowCalendar: false
    };

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    }

    handleClickOutside = (event) => {
        if (this.state.isShowCalendar && !this.container.contains(event.target)) {
            this.setState({ isShowCalendar: false });
        }
    };

    toggle = () => {
        this.setState(({ isShowCalendar }) => ({ isShowCalendar: !isShowCalendar }));
    };

    render() {
        const { className, selectedDate, onSelectDate } = this.props;
        const { isShowCalendar } = this.state;

        return (
            <div {...cls('', '', className)} ref={ref => this.container = ref}>
                <button
                    {...cls('button')}
                    onClick={() => this.toggle()}
                >
                    <TimeIcon {...cls('icon')}/>
                </button>
                {isShowCalendar && (
                    <Calendar
                        selected={selectedDate}
                        onSelect={date => onSelectDate(date)}
                    />
                )}
            </div>
        );
    }
}
