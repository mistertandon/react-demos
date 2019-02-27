import React, { Component } from 'react';
import './App.css';
import Ref from './components/ref';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h4>Welcome User</h4>
        <Ref />
      </div>
    );
  }
}

export default App;
