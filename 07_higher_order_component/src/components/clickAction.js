import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import withCounter from '../hoc/withCounter';

class ClickAction extends Component {

    render() {

        const { count, incrementCounter, addend } = this.props;

        return (
            <Fragment>
                <div>
                    Passed addend value using props {addend}
                </div>
                <button onClick={incrementCounter} style={{ cursor: 'default' }}>
                    Click count: {count}
                </button>
            </Fragment>
        )
    }
}

ClickAction.propTypes = {
    addend: PropTypes.string.isRequired
}

export default withCounter(ClickAction);