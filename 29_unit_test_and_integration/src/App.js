import React, { Component } from 'react';
import './app.scss';

import Header from './component/header/header';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Header />
    );
  }
}

export default App;
