import React, { Fragment, Children } from 'react'

const ReactChildrenA = (props) => {

    return (
        <Fragment>
            {
                Children.only(props.children)
            }
        </Fragment>
    )
}

export default ReactChildrenA