import React, { Component, Fragment } from 'react';
import Child from './Child'

class Parent extends Component {

    constructor(props) {

        super(props);

        this.state = {
            name: 'Parvesh'
        }

        console.log('Parent: constructor');
    }

    static getDerivedStateFromProps() {

        console.log('Parent: getDerivedStateFromProps');

        return null;
    }

    render() {

        console.log('Parent: render');

        return (
            <Fragment>
                Hello from Parent Component
                <br/>
                <Child />
            </Fragment>
        )
    }

    componentDidMount() {

        console.log('Parent: componentDidMount');
    }
}

export default Parent;