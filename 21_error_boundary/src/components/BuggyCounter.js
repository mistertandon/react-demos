import React, { Fragment, Component } from 'react';

class BuggyCounter extends Component {

    constructor(props) {

        super(props);

        this.state = {
            count: 0
        };

        this.incrementCount = this.incrementCount.bind(this);
    }

    incrementCount = () => {

        this.setState(
            ({ count }) => ({ count: count + 1 })
        )
    }

    render() {

        const { count } = this.state;

        if (count === 5) {

            throw new Error('fuck you');
        }

        return (

            <Fragment>

                <div>Hello from Counter compoent</div>
                <div>{count}</div>
                <button onClick={this.incrementCount}>Click men</button>

            </Fragment>
        );

    }



}

export default BuggyCounter;