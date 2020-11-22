import React, { Fragment, useEffect, useState } from 'react';

import './spacex.css';
import { connect } from 'react-redux';
import { getAllSpaceXData } from './../redux/actions/spacex.action';
import logo from './../spacex_desk.png';
// import logo from './../spacex_desk.png';

const SpaceX = (props) => {

    const { isError, data: spaceXData, yearsList } = props.spacex;

    const [currentYear, setCurrentYear] = useState(undefined);

    useEffect(() => {

        props.fetchAllSpaceXData();

    }, []);

    const launchStatus = [1, 0];

    const landStatus = [1, 0];

    const yearHandler = (selectedYear) => {

        if (selectedYear == currentYear) {

            setCurrentYear(undefined);
        } else {

            setCurrentYear(selectedYear);
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
            <div className='app__header'>
                SpaceX Launch Programs
            </div>
            <div className='container'>

                {
                    spaceXData.length > 0
                    && Array.isArray(spaceXData)
                    && (
                        <Fragment>
                            <div className='sidebar'>
                                <div className='launch_year__container'>
                                    <div className='launch_year__header'>
                                        Launch year
                                    </div>
                                    <div className='launch_years'>
                                        {
                                            yearsList.length
                                            && Array.isArray(yearsList)
                                            && yearsList.map((year, idx) => (

                                                <button key={idx}
                                                    className='launch_year__btn'
                                                    onClick={() => {
                                                        yearHandler(year);
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
                                            launchStatus.map((status, idx) => (

                                                <button key={idx} className='launch_status__text'>
                                                    {
                                                        status == 1 ? 'True' : 'False'
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
                                            landStatus.map((status, idx) => (
                                                // D4FF80
                                                <button key={idx}
                                                    className='landing_status__text'
                                                >
                                                    {
                                                        status == 1 ? 'true' : 'false'
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
                            </div>
                        </Fragment>
                    )
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

        fetchAllSpaceXData: () => dispatch(getAllSpaceXData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpaceX);