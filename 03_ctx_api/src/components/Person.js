import React, { Fragment } from 'react'
import { UserContext } from './../contexts/UserContext'

const Person = () => {

    return (

        <Fragment>
            <UserContext.Consumer>
                {
                    (userContext) => {

                        return (

                            <Fragment>
                                <p>{userContext.state.age}</p>

                                <button onClick={() => {

                                    userContext.incrementAgeByOne()
                                }}>
                                    Increment Age By One
                                </button>
                            </Fragment>
                        )
                    }
                }
            </UserContext.Consumer>
        </Fragment>
    )
}

export default Person