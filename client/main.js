import React from 'react';
import { Bins } from '../imports/collections/bin';
import ReactDom from 'react-dom';
import App from './components/app';
import { Router,Route,IndexRoute,browserHistory } from 'react-router';
import BinsMain from './components/bins/bins_main';
import BinsList from './components/bins/bins_list';
const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={BinsList}></IndexRoute>
            <Route path="/bins/:binId" component={BinsMain}></Route>
        </Route>    
    </Router>
);
Meteor.startup(() => {
    ReactDom.render(routes,document.querySelector('.container'));
});