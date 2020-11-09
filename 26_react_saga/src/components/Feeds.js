import React, { Component, Fragment } from 'react';

class Feeds extends Component {

    constructor(props) {

        super(props);

        this.state = {
            feeds: []
        }
    }

    render() {

        return (
            <Fragment>
                Hello from Feeds component
            </Fragment>
        )
    }
}

export default Feeds;