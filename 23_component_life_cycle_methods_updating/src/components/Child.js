import React, { Fragment, Component } from 'react';

class Child extends Component {

    constructor(props) {

        super(props);

        this.state = {
            name: 'Jiyanshi'
        }

        console.log('Çhild: constructor');

    }

    static getDerivedStateFromProps(props, state) {

        console.log('Çhild: getDerivedStateFromProps');

        return null;
    }

    render() {

        console.log('Çhild: render');

        return (
            <Fragment>
                Hello from Child Component
            </Fragment>
        );
    }

    shouldComponentUpdate(nextProps, nextState) {

        console.log('Çhild: shouldComponentUpdate');

        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {

        console.log('Çhild: getSnapshotBeforeUpdate');

        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshotValue) {

        console.log('Çhild: componentDidUpdate');
    }
}

export default Child;