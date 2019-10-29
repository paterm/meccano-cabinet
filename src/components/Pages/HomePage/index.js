import React from 'react';
import Page from "../../Common/Page";
import BEMHelper from "react-bem-helper";
import './home-page.scss';

const cls = new BEMHelper('home-page');
const HomePage = () => (
    <Page {...cls()}>
      <h1 {...cls('title')}>Home Page</h1>
    </Page>
);

export default HomePage;
