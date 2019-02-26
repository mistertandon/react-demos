import React, { Component } from 'react'

class PureComponentMimic extends PureComponent {

  render() {

    return (
      <React.Fragment>
        <h3>Pure Component:</h3>
        <h5>Username:{this.props.name}</h5>
      </React.Fragment>
    )
  }
}

export default PureComponentMimic