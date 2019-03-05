import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getUserList } from './../actions/userAction';

class User extends Component {

  render() {

    const { users } = this.props.user;

    return (
      <Fragment>
        <h4>
          Hi from User component.
      </h4>
      </Fragment>
    );

  }

  componentDidMount() {

    this.props.dispatchGetUserList();
  }
}

const mapStateToProps = (state) => {

  return state;
}

const mapDispatchToProps = (dispatch) => {

  return {

    dispatchGetUserList: () => {
      dispatch(getUserList());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);