import React, { Component, Fragment } from 'react';
import './app.scss';

import Header from './component/header/header';
import Headline from './component/Headlne/Headline';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (

      <Fragment>
        <Header />
        <Headline />
      </Fragment>

    );
  }
}

export default App;
