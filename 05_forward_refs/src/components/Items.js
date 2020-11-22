import React, { useEffect, useState } from 'react';

const Items = ({ refItemsArr }) => {

    const [refItems, setRefItems] = useState([]);

    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {

        setRefItems(refItemsArr);

        return () => {

            setFilteredItems([]);
        }
    }, [refItems]);


    const handleChange = (event) => {

        const searchQuery = event.target.value;

        if (searchQuery) {

            const matchItems = refItems.filter(val => val.includes(searchQuery));

            setFilteredItems(matchItems);
        } else {

            setFilteredItems([]);
        }
    }

    return (

        <div className='container'>
            <div className="Input Reference">
                {
                    JSON.stringify(refItemsArr)
                }
            </div>
            <div className='input__container'>
                <input type='text' onChange={handleChange} />
            </div>
            <div className='result__container'>
                {
                    filteredItems.length > 0
                    && Array.isArray(filteredItems)
                    && filteredItems.map((val, idx) => (
                        <div key={idx}>
                            {
                                val
                            }
                        </div>
                    ))
                }
            </div>
            Hello from Items component
        </div>
    )

};

export default Items;