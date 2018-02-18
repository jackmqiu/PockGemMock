import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import NavBar from './components/NavBar';
import Season from './components/Season';
import RewardList from './components/RewardList';

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
        //<Season SeasonObject={this.state.season}/>
        <RewardList Rewards={this.state.rewards}/>
      </div>
    )
  }
}

ReactDOM.render(

  <App />

  , document.getElementById('content'));
