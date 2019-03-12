import React, { Component } from 'react';

import './App.css';

import FormicForm from './components/FormicForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormicForm email="enggparveshtandon@gmail.com" password="1234qwer" newsletter={true} />
      </div>
    );
  }
}

export default App;
