import React, { Fragment, Component } from 'react';
import Child from './Child';

class Parent extends Component {

    constructor(props) {

        super(props);

        this.state = {
            name: 'Parvesh'
        }

        console.log('Parent: constructor');

    }

    static getDerivedStateFromProps(props, state) {

        console.log('Parent: getDerivedStateFromProps');

        return null;
    }

    render() {

        console.log('Parent: render');

        return (

            <Fragment>
                <Child />

                <button onClick={() => this.setState({ name: 'Prabhash' })} >
                    Update State
                </button>

            </Fragment >
        );
    }

    shouldComponentUpdate(nextProps, nextState) {

        console.log('Parent: shouldComponentUpdate');

        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {

        console.log('Parent: getSnapshotBeforeUpdate');

        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshotValue) {

        console.log('Parent: componentDidUpdate');
    }

}

export default Parent;