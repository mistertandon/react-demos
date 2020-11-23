import React, { Fragment, useEffect, useState } from 'react';

import './spacex.css';
import { connect } from 'react-redux';
import {
    getAllSpaceXData,
    getFilteredSpaceXData
} from './../redux/actions/spacex.action';

import logo from './../spacex_desk.png';

const SpaceX = (props) => {

    const { isError, data: spaceXData, yearsList } = props.spacex;

    const [selectedYear, setSelectedYear] = useState(null);

    const [launchStatus, setLaunchStatus] = useState(null);

    const [landingStatus, setLandingStatus] = useState(null);

    useEffect(() => {

        props.fetchAllSpaceXData();

    }, []);

    useEffect(() => {


        let queryStringObj = {};

        if (selectedYear !== null) {

            queryStringObj['launch_year'] = selectedYear;
        }

        if (launchStatus !== null) {

            queryStringObj['launch_success'] = String(launchStatus);
        }

        if (landingStatus !== null) {

            queryStringObj['land_success'] = String(landingStatus);
        }

        if (Object.keys(queryStringObj).length > 0) {

            let queryString = '';
            for (let key in queryStringObj) {

                queryString += `&${key}=${queryStringObj[key]}`;
            }

            let url = `https://api.spaceXdata.com/v3/launches?limit=100${queryString}`;

            props.fetchFilteredSpaceXData(url);
        } else {

            props.fetchAllSpaceXData();
        }

    }, [selectedYear, launchStatus, landingStatus]);

    const launchStatusRef = [1, 0];

    const landingStatusRef = [1, 0];



    const filterSpacexDataBasedOnYear = (clickedYear) => {

        if (clickedYear === selectedYear) {

            setSelectedYear(null);
        } else {

            setSelectedYear(clickedYear);
        }
    }

    const filterSpacexDataBasedOnLaunchStatus = (isTrueClickedOption = true) => {

        const isTrueClickedOptionTemp = isTrueClickedOption === 1 ? String(true) : String(false);

        if (launchStatus === isTrueClickedOptionTemp) {

            setLaunchStatus(null);
        } else {

            setLaunchStatus(isTrueClickedOptionTemp);
        }
    }

    const filterSpacexDataBasedOnLandingStatus = (isTrueClickedOption = true) => {

        const isTrueClickedOptionTemp = isTrueClickedOption === 1 ? String(true) : String(false);

        if (landingStatus === isTrueClickedOptionTemp) {

            setLandingStatus(null);
        } else {

            setLandingStatus(isTrueClickedOptionTemp);
        }
    }

    return (

        < Fragment >
            {

                console.log('props: ', props)
            }
            {

                console.log('My data: ', isError, spaceXData, yearsList)
            }
            {

                console.log('My yearsList: ', yearsList)
            }
            {

                console.log('selectedYear: ', selectedYear)
            }
            {

                console.log('launchStatus: ', launchStatus)
            }
            {

                console.log('landingStatus: ', landingStatus)
            }

            <div className='app__header'>
                SpaceX Launch Programs
            </div>
            <div className='container'>
                {
                    <Fragment>
                        <div className='sidebar'>
                            <div className='launch_year__container'>
                                <div className='launch_year__header'>
                                    Launch year
                                    </div>
                                <div className='launch_years'>
                                    {
                                        yearsList.length > 0
                                        && Array.isArray(yearsList)
                                        && yearsList.map((year, idx) => (

                                            <button key={idx}
                                                className='launch_year__btn'
                                                onClick={() => {
                                                    filterSpacexDataBasedOnYear(year);
                                                }}
                                            >
                                                {
                                                    year
                                                }
                                            </button>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='launch_status__container'>
                                <div className='launch_status__header'>
                                    Successful Launch
                                    </div>
                                <div className='launch_status'>
                                    {
                                        launchStatusRef.map((status, idx) => (

                                            <button key={idx}
                                                className='launch_status__text'
                                                onClick={
                                                    () => {
                                                        filterSpacexDataBasedOnLaunchStatus(status)
                                                    }
                                                }
                                            >
                                                {
                                                    status === 1 ? 'True' : 'False'
                                                }
                                            </button>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='landing_status__container'>
                                <div className='landing_status__header'>
                                    Successful Landing
                                    </div>
                                <div className='landing_status'>
                                    {
                                        landingStatusRef.map((status, idx) => (
                                            // D4FF80
                                            <button key={idx}
                                                className='landing_status__text'
                                                onClick={
                                                    () => {
                                                        filterSpacexDataBasedOnLandingStatus(status)
                                                    }
                                                }
                                            >
                                                {
                                                    status === 1 ? 'true' : 'false'
                                                }
                                            </button>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='content'>
                            {
                                spaceXData.length > 0
                                && Array.isArray(spaceXData)
                                && spaceXData.map(
                                    (
                                        {
                                            mission_name,
                                            flight_number,
                                            mission_id,
                                            launch_year,
                                            launch_success,
                                            rocket: { first_stage: { cores: [{ land_success }] } }

                                        }, idx) => (
                                            <div key={idx} className="spacex__tile">
                                                <div className="spacex_img__container">
                                                    <img className="spacex_img" src={logo} />
                                                </div>

                                                <div className='spacex_info__containter'>
                                                    <div>
                                                        {
                                                            `${mission_name} #${flight_number}`
                                                        }
                                                    </div>
                                                    <div>
                                                        Mission id
                                                    </div>
                                                    <div>
                                                        {
                                                            mission_id.length > 0
                                                            && (
                                                                mission_id.join(', ')
                                                            )
                                                        }
                                                        {
                                                            mission_id.length === 0 && '--'
                                                        }
                                                    </div>
                                                    <div>
                                                        Launch year
                                                        </div>
                                                    <div>
                                                        {
                                                            launch_year
                                                        }
                                                    </div>
                                                    <div>
                                                        Successful Launch
                                                        </div>
                                                    <div>
                                                        {
                                                            `${launch_success}`
                                                        }
                                                    </div>
                                                    <div>
                                                        Successful Landing
                                                    </div>
                                                    <div>
                                                        {
                                                            land_success == null ? '--' : `${land_success}`

                                                        }
                                                    </div>
                                                </div>

                                            </div>
                                        ))
                            }
                            {
                                spaceXData.length === 0
                                && (
                                    <div className='empty_container'>
                                        No Record found
                                    </div>
                                )
                            }
                        </div>
                    </Fragment>
                }

            </div>
        </Fragment >
    );

}

const mapStateToProps = (state) => {
    console.log('state', state);

    return state;
}

const mapDispatchToProps = (dispatch) => {

    return {

        fetchAllSpaceXData: () => dispatch(getAllSpaceXData()),
        fetchFilteredSpaceXData: (queryString) => dispatch(getFilteredSpaceXData(queryString))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpaceX);