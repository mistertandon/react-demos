import React, { Component, Fragment } from 'react';
import {
    BrowserRouter,
    Link,
    Route
} from 'react-router-dom';

const Books = (props) => {

    const { path, url } = props.match;

    return (

        <Fragment>
            <ul>
                <li>
                    <Link to={`${url}/html`}>Html</Link>
                </li>
                <li>
                    <Link to={`${url}/css`}>Css</Link>
                </li>
                <li>
                    <Link to={`${url}/javascript`}>Javascript</Link>
                </li>
            </ul>
            <Route path={`${path}/html`} render={() => <div>Reading Html</div>} />
            <Route path={`${path}/css`} render={() => <div>Reading Css</div>} />
            <Route path={`${path}/javascript`} render={() => <div>Reading Javascript</div>} />
            <Route path={`${path}/:id`} component={SubChild} />
        </Fragment>
    )
}

const SubChild = (props) => {

    const { id } = props.match.params;

    return (
        <div>
            {`Passed ID: ${id}`}
        </div>
    )
}
export default Books;