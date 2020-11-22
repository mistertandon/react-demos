import React, { Component } from 'react';
import './App.css';
import Items from './components/Items';

const itemsArr = ['ab', 'cd', 'ef', 'gh', 'bc'];

class App extends Component {

  render() {

    return (
      <div className="App">
        <Items refItemsArr={itemsArr} />
      </div>
    )

  }
}

export default App;
