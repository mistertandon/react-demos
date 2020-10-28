import React, { Component, Fragment } from 'react';

class Child extends Component {

    constructor(props) {

        super(props);

        this.state = {
            name: 'Jiyanshi'
        }

        console.log('Child: constructor');
    }

    static getDerivedStateFromProps() {

        console.log('Child: getDerivedStateFromProps');
        return null;
    }

    render() {

        console.log('Child: render');

        return (
            <Fragment>
                Hello from Child Component
            </Fragment>
        )
    }

    componentDidMount() {

        console.log('Child: componentDidMount');
    }
}

export default Child;