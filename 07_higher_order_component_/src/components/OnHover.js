import React from 'react';
import withCounter from './../hocs/withCounter'

const OnHover = (props) => {

    const { hoCState: { count }, incrementCounter } = props;

    return (
        <div onMouseOver={incrementCounter}>
            OnHover Component: Counter: {count}
        </div>

    )

}
export default withCounter(OnHover);
