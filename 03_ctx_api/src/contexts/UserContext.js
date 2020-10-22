import React, { Component } from 'react'

const UserContext = React.createContext()

class UserProvider extends Component {

    constructor(props) {

        super(props)

        this.state = {
            name: 'Parvesh',
            age: 30
        }

        this.incrementAgeByOne = this.incrementAgeByOne.bind(this)
    }

    incrementAgeByOne = () => {

        this.setState(
            (prevState) => (
                { age: prevState.age + 1 }
            )
        )
    }

    render() {

        return (

            <UserContext.Provider value={{
                state: this.state,
                incrementAgeByOne: this.incrementAgeByOne
            }}>
                {
                    this.props.children
                }
            </UserContext.Provider>
        )
    }
}

export {
    UserContext,
    UserProvider

}