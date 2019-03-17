import React, { Component, Fragment } from 'react'

import {
    UserContext
} from './../contexts/user_context/UserContext';

class Person extends Component {

    render() {

        return (
            <React.Fragment>
                <UserContext.Consumer>

                    {
                        (userContext) => {

                            return (
                                <Fragment>
                                    <div>
                                        Hi from {userContext.state.name}
                                    </div>
                                    <div>
                                        My Age is {userContext.state.age}
                                    </div>
                                    <button onClick={userContext.incrAgeByOne}>
                                        Update Age
                                    </button>
                                </Fragment>
                            )
                        }
                    }

                </UserContext.Consumer>
            </React.Fragment>
        )
    }
}

export default Person;