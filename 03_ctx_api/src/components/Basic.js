import React, { Fragment } from 'react'
import Family from './Family'
import { UserProvider } from './../contexts/UserContext'

const Basic = () => {

    return (

        <Fragment>
            <UserProvider>
                <Family />
            </UserProvider>
        </Fragment>

    );
}

export default Basic;