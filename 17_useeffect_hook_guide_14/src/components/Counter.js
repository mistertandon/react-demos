import React, { Fragment, useState, useMemo } from 'react';

const Counter = () => {

    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);

    const isEven = useMemo(
        () => {

            let i = 0;

            while (i < 200000000) i++;

            return countA % 2 === 0
                ? true
                : false
        }, [countA]
    );

    return (

        <Fragment>
            <p>Counter A: {countA}</p>
            <p>Counter B: {countB}</p>

            <button onClick={() => setCountA(countA + 1)}>
                Increase counter A
            </button>

            <button onClick={() => setCountB(countB + 1)}>
                Increase counter B
            </button>
            {
                isEven
                    ? 'Even'
                    : 'Odd'
            }
        </Fragment>

    );
}

export default Counter;