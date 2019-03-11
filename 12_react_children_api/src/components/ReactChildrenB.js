import React, { Component, Fragment } from 'react';

class ReactChildrenB extends Component {

  render() {

    return (
      <Fragment>
        {
          this.props.children
        }
      </Fragment>
    )
  }
}

export default ReactChildrenB;