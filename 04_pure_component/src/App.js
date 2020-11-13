import React, { Component } from 'react';
import './App.css';

import RegularComponent from './components/RegularComponent';
import PureComponentMimic from './components/PureComponentMimic';

class App extends Component {

  constructor(props) {

    super(props)
    this.updateUserName = this.updateUserName.bind(this)
  }

  state = {
    name: "parvesh"
  }

  updateUserName = () => {

    this.setState({ name: 'parvesh' })
  }

  render() {

    const name = this.state.name;

    return (
      <div className="App">
        <PureComponentMimic name={name} />
        <RegularComponent name={name} />
      </div>
    )
  }

  componentDidMount() {

    setInterval(() => this.updateUserName(), 2000)
  }
}

export default App;
