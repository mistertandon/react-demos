import React, { Fragment, useEffect, useState } from 'react';

import './spacex.css';
import { connect } from 'react-redux';
import {
    getAllSpaceXData,
    getFilteredSpaceXData,
    runLoader
} from './../redux/actions/spacex.action';

import logo from './../spacex_desk.png';

import DisplayHeading from './DisplayHeading';

const SpaceX = (props) => {

    const { isError, data: spaceXData, yearsList, isLoading } = props.spacex;

    const { fetchAllSpaceXData, fetchFilteredSpaceXData, runLoaderDispatch } = props;

    const [selectedYear, setSelectedYear] = useState(null);

    const [launchStatus, setLaunchStatus] = useState(null);

    const [landingStatus, setLandingStatus] = useState(null);

    const [activeYearId, setActiveYearId] = useState(null);

    const [activeLaunchStatusId, setActiveLaunchStatusId] = useState(null);

    const [activeLandingStatusId, setActiveLandingStatusId] = useState(null);

    useEffect(() => {

        runLoaderDispatch(true);
        fetchAllSpaceXData();
        runLoaderDispatch(false);

    }, []);

    useEffect(() => {

        runLoaderDispatch(true);

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

            fetchFilteredSpaceXData(url);
        } else {

            fetchAllSpaceXData();
        }

        runLoaderDispatch(false);

    }, [selectedYear, launchStatus, landingStatus]);

    const launchStatusRef = [1, 0];

    const landingStatusRef = [1, 0];

    const filterSpacexDataBasedOnYear = (selectdId, clickedYear) => {

        if (clickedYear === selectedYear) {

            setSelectedYear(null);
            setActiveYearId(null);
        } else {

            setSelectedYear(clickedYear);
            setActiveYearId(selectdId);
        }
    }

    const filterSpacexDataBasedOnLaunchStatus = (selectdId, isTrueClickedOption = true) => {

        const isTrueClickedOptionTemp = isTrueClickedOption === 1 ? String(true) : String(false);

        if (launchStatus === isTrueClickedOptionTemp) {

            setLaunchStatus(null);
            setActiveLaunchStatusId(null);

        } else {

            setLaunchStatus(isTrueClickedOptionTemp);
            setActiveLaunchStatusId(selectdId);
        }
    }

    const filterSpacexDataBasedOnLandingStatus = (selectedId, isTrueClickedOption = true) => {

        const isTrueClickedOptionTemp = isTrueClickedOption === 1 ? String(true) : String(false);

        if (landingStatus === isTrueClickedOptionTemp) {

            setLandingStatus(null);
            setActiveLandingStatusId(null);
        } else {

            setLandingStatus(isTrueClickedOptionTemp);
            setActiveLandingStatusId(selectedId);
        }
    }

    return (

        < Fragment >

            <DisplayHeading classNameRef='app__header' data='SpaceX Launch Programs' />

            <div className='container'>
                {
                    <Fragment>
                        <div className='sidebar'>
                            <div className='launch_year__container'>

                                <DisplayHeading classNameRef='launch_year__header' data='Launch year' />

                                <div className='launch_years'>
                                    {
                                        isLoading === false
                                        && yearsList.length > 0
                                        && Array.isArray(yearsList)
                                        && yearsList.map((year, idx) => (

                                            <button key={idx}
                                                className={'launch_year__btn' + (idx === activeYearId ? ' active' : ' inactive')}
                                                onClick={() => {
                                                    filterSpacexDataBasedOnYear(idx, year);
                                                }}
                                            >
                                                {
                                                    year
                                                }
                                            </button>
                                        ))
                                    }
                                    {
                                        isLoading === false
                                        && yearsList.length === 0
                                        && <DisplayHeading classNameRef='' data='No Record found' />
                                    }
                                </div>
                            </div>
                            <div className='launch_status__container'>

                                <DisplayHeading classNameRef='launch_status__header' data='Successful Launch' />

                                <div className='launch_status'>
                                    {
                                        launchStatusRef.map((status, idx) => (

                                            <button key={idx}
                                                className={'launch_status__text' + (idx === activeLaunchStatusId ? ' active' : ' inactive')}
                                                onClick={
                                                    () => {
                                                        filterSpacexDataBasedOnLaunchStatus(idx, status)
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

                                <DisplayHeading classNameRef='landing_status__header' data='Successful Landing' />

                                <div className='landing_status'>
                                    {
                                        landingStatusRef.map((status, idx) => (

                                            <button key={idx}
                                                className={'landing_status__text' + (idx === activeLandingStatusId ? ' active' : ' inactive')}
                                                onClick={
                                                    () => {
                                                        filterSpacexDataBasedOnLandingStatus(idx, status)
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
                                isLoading === false
                                && spaceXData.length > 0
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

                                                    <DisplayHeading classNameRef=''
                                                        data={
                                                            `${mission_name} #${flight_number}`
                                                        } />

                                                    <DisplayHeading classNameRef='' data='Mission id' />

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
                                                    <DisplayHeading classNameRef='' data='Launch year' />

                                                    <DisplayHeading classNameRef='' data={launch_year} />

                                                    <DisplayHeading classNameRef='' data='Successful Launch' />

                                                    <DisplayHeading classNameRef=''
                                                        data={
                                                            `${launch_success}`
                                                        } />

                                                    <DisplayHeading classNameRef='' data='Successful Landing' />

                                                    <DisplayHeading classNameRef=''
                                                        data={land_success == null ? '--' : `${land_success}`}
                                                    />

                                                </div>

                                            </div>
                                        ))
                            }
                            {
                                isLoading === false
                                && spaceXData.length === 0
                                && <DisplayHeading classNameRef='empty_container' data='No Record found' />
                            }
                            {
                                isLoading === true
                                && <DisplayHeading classNameRef='empty_container' data='...Loading' />
                            }
                        </div>
                    </Fragment>
                }

            </div>

            <DisplayHeading classNameRef='app__footer' data='Developed by : Parvesh' />

        </Fragment >
    );

}

const mapStateToProps = (state) => {

    return state;
}

const mapDispatchToProps = (dispatch) => {

    return {

        fetchAllSpaceXData: () => dispatch(getAllSpaceXData()),
        fetchFilteredSpaceXData: (queryString) => dispatch(getFilteredSpaceXData(queryString)),
        runLoaderDispatch: (status) => dispatch(runLoader(status))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpaceX);