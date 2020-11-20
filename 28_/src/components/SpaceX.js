import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

const SpaceX = () => {

    const [spaceXData, setSpaceXData] = useState([]);
    const [yearsList, setYearsList] = useState([]);

    useEffect(() => {

        const getSpaceXData = async () => {

            try {
                const result = await axios.get('https://api.spacexdata.com/v3/launches?limit=100&launch_success=true');
                console.log('result', result);
                if (result.data.length) {

                    setSpaceXData(result.data);

                    // const yearsInfo = result.data.map(spaceX => parseInt(spaceX.launch_year, 10));

                    // let uniqueYears = new Set(yearsInfo);

                    // setYearsList(uniqueYears);
                    // console.log(uniqueYears);

                }
            } catch (err) {
                console.log('err', err);
                setSpaceXData([]);
            }

        }

        getSpaceXData();
    }, []);

    return (

        <Fragment>
            <div className='container'>
                {
                    spaceXData.length
                    && Array.isArray(spaceXData)
                    && (
                        <Fragment>
                            <div className='sidebar'>
                                <div className='launch_year__container'>
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
        </Fragment>
    );

}

export default SpaceX;