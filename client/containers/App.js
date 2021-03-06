import React, { Component } from 'react';
import NavBar from './NavBar';
import Season from './Season';
import RewardList from './RewardList';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from "../reducers";
import '../style/style.scss';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render () {
    return (
      <div>
        <NavBar/>
        {this.props.children}
      </div>
    )
  }
}

export default App;
