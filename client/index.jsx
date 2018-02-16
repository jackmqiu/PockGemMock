import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import NavBar from './components/NavBar';
import Season from './components/Season';
import {SeasonObject} from './state.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      season: SeasonObject,
    };
  }
  render () {
    return (
      <div>
        <NavBar />
        <Season SeasonObject={this.state.season}/>
      </div>
    )
  }
}

ReactDOM.render(

  <App />

  , document.getElementById('content'));
