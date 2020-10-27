import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { getUserList } from './../actions/userAction'

class User extends Component {

    constructor(props) {

        super(props)
    }

    render() {

        const { users } = this.props.user

        return (

            <Fragment>
                <ul>
                    {
                        users &&
                        users.length &&
                        users.map(
                            user => (
                                <li key={user.id}>
                                    {
                                        user.email
                                    }
                                </li>
                            )
                        )
                    }
                </ul>
            </Fragment>
        );

    }

    componentDidMount() {

        this.props.dispatchGetUserList()
    }
}



const mapStateToProps = (state) => {

    return state
}

const mapDispatchToProps = (dispatch) => {

    return {

        dispatchGetUserList: () => {

            dispatch(getUserList());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(User)