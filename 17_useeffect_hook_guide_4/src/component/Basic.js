import React, { useReducer } from 'react'

const initialState = {
    count_a: 0,
    count_b: 0
}

const reducer = (state, action) => {

    switch (action.type) {

        case 'increment_count_a': return { ...state, count_a: state.count_a + 1 };

        case 'decrement_count_a': return { ...state, count_a: state.count_a - 1 };

        case 'reset_count_a': return { ...state, count_a: 0 };

        case 'increment_count_b': return { ...state, count_b: state.count_b + 1 };

        case 'decrement_count_b': return { ...state, count_b: state.count_b - 1 };

        case 'reset_count_b': return { ...state, count_b: 0 };

        default: throw new Error('Unknown action')
    }
}

const Basic = () => {

    const [{ count_a, count_b }, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>
                <button onClick={() => dispatch({ type: 'increment_count_a' })}> + </button>
                {
                    count_a
                }
                <button onClick={() => dispatch({ type: 'decrement_count_a' })}> - </button>
                <button onClick={() => dispatch({ type: 'reset_count_a' })}> Reset </button>
            </div>
            <div>
                <button onClick={() => dispatch({ type: 'increment_count_b' })}> + </button>
                {
                    count_b
                }
                <button onClick={() => dispatch({ type: 'decrement_count_b' })}> - </button>
                <button onClick={() => dispatch({ type: 'reset_count_b' })}> Reset </button>
            </div>
        </div>
    )

}

export default Basic