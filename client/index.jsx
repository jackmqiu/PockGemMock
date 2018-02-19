import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { browserHistory, Router, Route, Link, withRouter } from 'react-router-3';
import routes from './routes';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from "./reducers";

const store = createStore(
   reducers,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes = {routes}/>

  </Provider>

  , document.getElementById('content'));
