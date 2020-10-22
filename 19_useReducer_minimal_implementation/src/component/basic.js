import React, { useReducer } from 'react'

const initialCount = 0

const reducer = (state, action) => {

    switch (action) {

        case 'increment': return state + 1;

        case 'decrement': return state - 1;

        case 'reset': return 0

        default: throw new Error('Action does not exist.')
    }
}

const Basic = () => {

    const [count, dispatch] = useReducer(reducer, initialCount)

    return (
        <div>
            {
                count
            }
            <button onClick={() => dispatch('increment')}>
                Increment
            </button>
            <button onClick={() => dispatch('decrement')}>
                Decrement
            </button>
            <button onClick={() => dispatch('reset')}>
                Reset
            </button>
        </div>
    )
}

export default Basic