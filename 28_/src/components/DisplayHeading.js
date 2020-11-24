import { memo } from 'react';

const DisplayHeading = memo(({ classNameRef, data }) => {

    return (
        <div className={classNameRef}>
            {
                data
            }
        </div>
    )
});

export default DisplayHeading;