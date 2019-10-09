import React from 'react';

import './common.scss';
import './app.scss';

import Header from './components/Header/Header';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import ContentHeader from './components/ContentHeader/ContentHeader';
import BEMHelper from 'react-bem-helper';

const cls = new BEMHelper('app');

function App(props) {
  return (
    <div {...cls()}>
      <Header />
      <LeftSidebar />

      <section {...cls('content')}>
        <ContentHeader />

        <section {...cls('content-body')}>
          {props.children}
        </section>
      </section>
    </div>
  );
}

export default App;
