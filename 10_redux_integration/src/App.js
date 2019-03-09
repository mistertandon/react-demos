import React, { Component } from 'react';

import './App.css';
import './user.css'

import User from './components/User';

class App extends Component {

  render() {
    return (
      <div className="App">
        <User />
      </div>
    );
  }
}

export default App;
