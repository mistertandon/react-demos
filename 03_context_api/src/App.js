import React, { Component } from 'react';
import './App.css';

import {
  UserProvider
} from './contexts/user_context/UserContext';

import Family from './components/Family';

class App extends Component {

  render() {
    return (
      <UserProvider>
        <div className="App">
          <Family />
        </div>
      </UserProvider>
    );
  }
}

export default App;
