import React, { Component } from 'react';
import './App.css';

import Reservation from './components/Reservation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Reservation />
      </div>
    );
  }
}

export default App;
