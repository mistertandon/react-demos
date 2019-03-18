import React, { Component, Fragment } from 'react';
import {
    BrowserRouter,
    Link,
    Route
} from 'react-router-dom';

const Books = (props) => {

    const { params, path, url } = props.match;
    console.log(props);
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
        </Fragment>
    )
}

export default Books;