import React, { Component } from 'react'

class Ref extends Component {

    constructor(props) {

        super(props);

        this.inputRef = React.createRef();
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler = () => {

        let refValue = null;
        refValue = this.inputRef.current.value;
        alert(refValue);
    }

    render() {

        return (
            <React.Fragment>
                <input type="text" ref={this.inputRef} />
                <button onClick={this.clickHandler}>Get ref value</button>
            </React.Fragment>
        )
    }

    componentDidMount() {

        this.inputRef.current.focus()
    }
}

export default Ref;