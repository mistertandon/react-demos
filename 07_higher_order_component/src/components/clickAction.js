import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickAction extends Component {

    render() {

        const {count, incrementCounter}  = this.props;

        return (
            <h4 onClick={incrementCounter} style={{ cursor: 'default' }}>
                Click count: {count}
            </h4>
        )
    }
}

export default withCounter(ClickAction);