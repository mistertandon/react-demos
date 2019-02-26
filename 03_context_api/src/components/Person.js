import React, { Component } from 'react'

import {
    UserContext
} from './../contexts/user_context/UserContext';

class Person extends Component {

    render() {

        return (
            <React.Fragment>
                <UserContext.Consumer>

                    {
                        (userContext) => <div>Hi from {userContext.state.name}</div>
                    }

                </UserContext.Consumer>
            </React.Fragment>
        )
    }
}

export default Person;