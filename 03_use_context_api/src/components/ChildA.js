import React, { useContext } from 'react';

import { CounterContext } from '../context/CounterProvider';

const ChildA = () => {

    const { count, handleCount } = useContext(CounterContext);

    return (
        <div>
            <div>
                Child A
            </div>
            <div>
                {
                    count
                }
            </div>
            <div>
                <button onClick={handleCount}>
                    Update Counter
                </button>
            </div>

        </div>
    )
}

export default ChildA;
