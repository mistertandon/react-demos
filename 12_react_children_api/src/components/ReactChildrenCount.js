import React, { Component, Children, Fragment } from 'react';

class ReactChildrenCount extends Component {

  render() {

    return (
      <Fragment>
        <p>Passed children count : 
          {
            Children.count(this.props.children)
          }
        </p>
      </Fragment>
    )
  }
}

export default ReactChildrenCount;