import React, { Fragment } from 'react';

const FRIinput = React.forwardRef(
    (props, ref) => {

        return (
            <Fragment>
                <input type="text" ref={ref} />
            </Fragment>
        )
    }
)

export default FRIinput