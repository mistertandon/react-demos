import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { fetchFeedStart } from './../redux/action/fetchFeeds.action';

class Feeds extends Component {

    constructor(props) {

        super(props);
    }

    render() {

        const { data } = this.props.feeds;

        return (
            <Fragment>
                <div className="container">
                    <div className="author__container">
                        {
                            Array.isArray(data)
                            && data.length > 0
                            && data.map(({ id, author, url }) =>
                                (
                                    <div key={id}>
                                        {
                                            author
                                        }
                                    </div>
                                ))
                        }
                    </div>
                    <div className="suggestion__container">

                    </div>
                </div>

            </Fragment>
        )
    }

    componentDidMount() {

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