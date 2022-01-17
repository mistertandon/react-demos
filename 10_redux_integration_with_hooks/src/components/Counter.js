import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCountByOne, decreaseCountByOne } from './../actions/counterActions';

const Counter = () => {

    const dispatch = useDispatch();

    const incrementCounter = useCallback(() => dispatch(increaseCountByOne()), [dispatch]);

    const decrementCounter = useCallback(() => dispatch(decreaseCountByOne()), [dispatch]);

    const { count } = useSelector(state => state.counter);

    return (
        <div>
            <div>
                {
                    count
                }
            </div>
            <div>
                <div>
                    <button onClick={incrementCounter}>
                        Increase
                    </button>
                </div>

                <div>
                    <button onClick={decrementCounter}>
                        Decrease
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Counter;