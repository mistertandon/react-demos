import React, { Component, Fragment } from 'react';
import './app.scss';

import Header from './component/header/Header';
import Headline from './component/Headlne/Headline';

class App extends Component {

  constructor(props) {
    
    super(props);
  }

  render() {

    return (

      <Fragment>

        <Header />
        <section>
          <Headline title='Lorem Ipsum' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
        </section>

      </Fragment>

    );
  }
}

export default App;
