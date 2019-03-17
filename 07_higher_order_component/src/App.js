import React, { Component } from 'react';
import './App.css';

import ClickAction from './components/clickAction';
import HoverAction from './components/hoverAction';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickAction addend ='5' />
        <HoverAction />
      </div>
    );
  }
}

export default App;
