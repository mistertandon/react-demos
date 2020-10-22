import React, { Fragment } from 'react'
import { UserContext } from './../contexts/UserContext'

const Person = () => {

    return (

        <Fragment>
            <UserContext.Consumer>
                {
                    (context) => {

                        return (

                            <Fragment>
                                <p>{context.state.age}</p>

                                <button onClick={() => {

                                    context.incrementAgeByOne()
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