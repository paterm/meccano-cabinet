import React from 'react';
import { connect } from 'react-redux';
import BEMHelper from 'react-bem-helper';

import './logo.scss';
import store from '../../../../../../redux/store';
import { toggleSidebar } from '../../../../../../redux/actions';

const cls = new BEMHelper('logo');

function Logo({ sidebar }) {
    return (
        <div
            {...cls('', { open: sidebar.open })}
            onClick={() => store.dispatch(toggleSidebar())}
        >
          <span {...cls('icon')}>
            <i />
            <i />
          </span>

          <span {...cls('name')}>Ex Libris</span>
        </div>
    );
}

function mapStateToProps({ sidebar }) {
    return { sidebar };
}

export default connect(mapStateToProps)(Logo);
