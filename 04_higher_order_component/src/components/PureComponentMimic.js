import React, { PureComponent } from 'react'

class PureComponentMimic extends PureComponent {

  render() {

    console.log('************* render: PureComponentMimic *************')

    return (
      <React.Fragment>
        <h3>Pure Component Mimic:</h3>
        <h5>Username:{this.props.name}</h5>
      </React.Fragment>
    )
  }
}

export default PureComponentMimic