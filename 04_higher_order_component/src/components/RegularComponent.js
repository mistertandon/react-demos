import React, { Component } from 'react'

class RegularComponent extends Component {

  render() {

    return (
      <React.Fragment>
        <h3>Regular Component:</h3>
        <h5>Username:{this.props.name}</h5>
      </React.Fragment>
    )
  }
}

export default RegularComponent