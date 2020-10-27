import React from 'react'
import withCounter from './../hocs/withCounter'

const OnClick = (props) => {

    const { hoCState: { count }, incrementCounter } = props;

    return (
        <div >
            <p>
                OnClick Component
            </p>

            <button onClick={incrementCounter}>
                Click me
            </button>
            
            <span>
                Counter: {count}
            </span>

        </div>


    )
}
export default withCounter(OnClick);