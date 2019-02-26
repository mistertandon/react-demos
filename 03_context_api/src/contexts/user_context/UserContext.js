import React, { Component } from 'react'

const UserContext = React.createContext();

class UserProvider extends Component {

    state = {
        name: 'Parevsh',
        age: 25
    }

    render() {

        return (
            <UserContext.Provider value={{
                state: this.state
            }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export {
    UserContext,
    UserProvider
}