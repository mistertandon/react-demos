import React, { useContext } from 'react';
import { CounterContext } from '../context/CounterProvider';
const ChildB = () => {
    const { count, handleCount } = useContext(CounterContext);
    return (
        <div>
            <div>
                Child B
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

export default ChildB;