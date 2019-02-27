import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverAction extends Component {

    render() {

        const { count, incrementCounter } = this.props;

        return (
            <h4 onMouseOver={incrementCounter} style={{ cursor: 'pointer' }}>
                Hover count: {count}
            </h4>
        )
    }
}

export default withCounter(HoverAction);