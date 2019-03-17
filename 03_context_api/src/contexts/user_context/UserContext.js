import React, { Component } from 'react'

const UserContext = React.createContext();

class UserProvider extends Component {

    constructor(props) {

        super(props);

        this.state = {
            name: 'Parevsh',
            age: 25
        }

        this.increaseAgeByOne = this.increaseAgeByOne.bind(this);
    }

    increaseAgeByOne = () => {

        this.setState(
            (prevState) => ({
                age: prevState.age + 1
            })
        );
    }

    render() {

        return (
            <UserContext.Provider value={{
                state: this.state,
                incrAgeByOne: this.increaseAgeByOne
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