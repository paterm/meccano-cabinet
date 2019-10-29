import React, { PureComponent } from 'react';

import { Link } from 'react-router-dom';
import BEMHelper from 'react-bem-helper';

import './content-header.scss';

import UploadIcon from './svg-icons/UploadIcon';
import SearchIcon from './svg-icons/SearchIcon';
import { moment } from '../../../../helpers/moment';
import CalendarButton from './components/CalendarButton';

const cls = new BEMHelper('content-header');

export default class Index extends PureComponent {
  state = {
    selectedDate: moment()
  };

  setSelectedDate = (selectedDate) => {
    this.setState({ selectedDate });
  };

  render() {
    const { selectedDate } = this.state;

    return (
      <section {...cls()}>
        <div {...cls('group')}>
          <Link {...cls('link')} to='/analytic'>Аналитика</Link>
          <Link {...cls('link')} to=''>Упоминания</Link>
        </div>

        <div {...cls('group')}>
          <Link {...cls('link')} to=''>СМИ</Link>
          <Link {...cls('link')} to=''>SM</Link>
        </div>

        <div {...cls('group')}>
          <Link {...cls('group-item')} to=''>
            <UploadIcon {...cls('icon')}/>
          </Link>
          <CalendarButton
            {...cls('group-item')}
            selectedDate={selectedDate}
            onSelectDate={this.setSelectedDate}
          />
          <Link {...cls('group-item')} to=''>
            <SearchIcon {...cls('icon')}/>
          </Link>
        </div>
      </section>
    );
  }
}
