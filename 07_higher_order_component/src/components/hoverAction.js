import React, { Component } from 'react';
import withCounter from '../hoc/withCounter';

class HoverAction extends Component {

    render() {

        const { count, incrementCounter } = this.props;

        return (
            <div onMouseOver={incrementCounter} style={{ cursor: 'pointer' }}>
                Hover count: {count}
            </div>
        )
    }
}

export default withCounter(HoverAction);