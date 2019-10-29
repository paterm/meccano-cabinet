import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; // , Route, Switch
import App from '../components/App/App';
import HomePage from "../components/Pages/HomePage";
import AnalyticPage from "../components/Pages/AnalyticPage";

export default (
    <Router basename='/'>
        <App>
          <Switch>
            <Route exact component={HomePage} path='/' />
            <Route exact component={AnalyticPage} path='/analytic' />
          </Switch>
        </App>
    </Router>
)
