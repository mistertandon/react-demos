import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getAllSpaceXData } from './../redux/actions/spacex.action';

const SpaceX = (props) => {

    const { isError, data: spaceXData, yearsList } = props.spacex;

    useEffect(() => {

        props.fetchAllSpaceXData();

    }, []);

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
            <div className='container'>
                {
                    spaceXData.length > 0
                    && Array.isArray(spaceXData)
                    && (
                        <Fragment>
                            <div className='sidebar'>
                                <div className='launch_year__container'>
                                    Hello from launch year
                                    {
                                        console.log(yearsList)
                                    }
                                    {
                                        yearsList.length
                                        // && Array.isArray(yearsList)
                                        && yearsList.map((year, idx) => (

                                            <div key={idx}>
                                                {
                                                    year
                                                }
                                            </div>
                                        ))



                                    }
                                </div>
                                <div className='launch_status__container'>
                                    Hello from launch status
                                </div>
                                <div className='landing_status__container'>
                                    Hello from landing status
                                </div>
                            </div>
                            <div className='content'>
                                Hello from content
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