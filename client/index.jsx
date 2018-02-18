import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, Link, withRouter } from 'react-router-3';
import Counter from './components/Counter';
import NavBar from './components/NavBar';
import Season from './containers/Season';
import RewardList from './containers/RewardList';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from "./reducers";

import {SeasonObject, Rewards} from './stateMock.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      season: SeasonObject,
      rewards: Rewards,
    };
  }
  render () {
    return (
      <div>
        <NavBar />
        //<Season />
        <RewardList Rewards={this.state.rewards}/>
      </div>
    )
  }
}

// <Router history={browserHistory} routes = {routes}/>
ReactDOM.render(
  <Provider store={createStore(reducers)}>

    <App/>
  </Provider>

  , document.getElementById('content'));
