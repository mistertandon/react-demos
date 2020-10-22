import React, { Fragment, Children } from 'react'

const ReactChildrenCount = (props) => {

    return (
        <Fragment>
            {
                Children.count(props.children)
            }
        </Fragment>

    )
}

export default ReactChildrenCount