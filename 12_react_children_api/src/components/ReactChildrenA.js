import React, { Component, Children, Fragment } from 'react';

class ReactChildrenA extends Component {

  render() {

    return (
      <Fragment>
        {
          Children.only(this.props.children)
        }
      </Fragment>
    )
  }
}

export default ReactChildrenA;