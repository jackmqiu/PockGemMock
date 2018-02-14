import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render () {
    return (
      <div>
        <Counter />
      </div>
    )
  }
}

ReactDOM.render(

  <App />
  
  , document.getElementById('content'));
