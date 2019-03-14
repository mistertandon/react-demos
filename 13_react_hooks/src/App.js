import React, { Component } from 'react';

import './App.css';

import Greeting from './components/Greeting';
import { MyResponsiveComponent } from './components/MyResponsiveComponent';

class App extends Component {

  render() {

    return (

      <div className="App">
        <Greeting />
        <MyResponsiveComponent />
      </div>
    );
  }
}

export default App;
