import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { getUserList } from './../actions/userAction';
import UserRecord from './UserRecord';

class User extends Component {

  render() {

    const { users } = this.props.user;

    return (
      <Fragment>
        <h4>
          Hi from User component.
      </h4>
        <div className="UsersContainer">
          {
            users.length && users.map((user, index) => {

              return (
                <div key={`user_${index}`} className="userRecordContainer">

                  <div className="userRecord">
                    <UserRecord userProperty={user.first_name} />
                  </div>
                  <div className="userRecord">
                    <UserRecord userProperty={user.last_name} />
                  </div>

                </div>
              )
            })
          }
        </div>
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