import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { fetchFeedStart } from './../redux/action/fetchFeeds.action';

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

    componentDidMount(){

        this.props.fetchFeedsBySaga();
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return state;
}

const mapDispatchToProps = (dispatch) => {

    return {
        fetchFeedsBySaga: () => dispatch(fetchFeedStart())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Feeds);