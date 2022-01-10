import React, { Component, div } from 'react';

class Headline extends Component {

    constructor(props) {

        super(props);
    }

    render() {

        const { title, desc } = this.props;

        if (!title || !desc) {

            return null;

        } else {

            return (
                <div data-test='headline-container'>
                    <h1 data-test='title'>
                        {title}
                    </h1>
                    <p data-test='description'>
                        {desc}
                    </p>
                </div>
            )
        }
    }
}

export default Headline;