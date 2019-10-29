import React from 'react';

import './common.scss';
import './app.scss';

import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import ContentHeader from './components/ContentHeader';
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
