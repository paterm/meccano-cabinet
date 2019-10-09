import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'; // , Route, Switch

import App from '../components/App/App';

export default (
    <Router basename='/'>
        <App />
    </Router>
)
