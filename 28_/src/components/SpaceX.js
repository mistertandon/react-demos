import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getAllSpaceXData } from './../redux/actions/spacex.action';

const SpaceX = (props) => {

    const [spaceXData, setSpaceXData] = useState([]);
    const [yearsList, setYearsList] = useState([]);

    useEffect(() => {

        console.log(props);
        const { fetchAllSpaceXData } = props;
        fetchAllSpaceXData();

    }, []);

    return (

        <Fragment>
            Hello from SpaceX component
        </Fragment>
    );

}

const mapStateToProps = (state) => {
    console.log('state', state);
    return state;
}

const mapDispatchToProps = (dispatch) => {

    return {

        fetchAllSpaceXData: () => dispatch(getAllSpaceXData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpaceX);