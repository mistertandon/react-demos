import React, { Component } from 'react';
import FRInput from './FRInput';

class FRParentInput extends Component {

  constructor(props) {

    super(props)
    this.inputRef = React.createRef()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {

    this.inputRef.current.focus()
  }

  render() {

    return (
      <React.Fragment>
        <FRInput ref={this.inputRef} />
        <button onClick={}>Focus Input</button>
      </React.Fragment>
    )

  }
}

export default FRParentInput;