import React, { Component } from 'react';
import { throws } from 'assert';

class MiniFormic extends Component {

  constructor(props) {

    super(props);

    this.state = {
      values: this.props.initialValues || {},
      touched: {},
      errors: {}
    }

    this.handleChange.bind(this);
    this.handleBlur.bind(this);
  }

  handleChange = (event) => {

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    event.persist();

    this.setState(

      (prevState) => (
        {
          values: {
            ...prevState.values,
            [name]: value
          }
        }
      )
    );
  }

  handleSubmit = (event) => {

    event.preventDefault();
    this.props.onSubmit(this.state.values);
  }

  handleBlur = (event) => {

    const target = event.target;
    const name = target.name;

    event.persist();

    this.setState(
      (prevState) => (
        {
          touched: {
            ...prevState.touched,
            [name]: true
          }
        }
      )
    );

  }

  render() {

    return this.props.children(
      {
        ...this.state,
        handleChange: this.handleChange,
        handleBlur: this.handleBlur,
        handleSubmit: this.handleSubmit
      }
    )
  }
}

export default MiniFormic;