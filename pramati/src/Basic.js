import react, { Component, createRef, Fragment } from 'react';

function debouncingFunction(poorFunc, delay) {

    var timer;

    return function () {

        var context = this;
        var args = arguments;

        if (timer) {

            clearTimeout(timer);
        }

        timer = setTimeout(
            () => {
                poorFunc.apply(context, args);
            },
            delay
        )

    }
}

class Basic extends Component {

    constructor(props) {

        super(props);

        this.state = {
            searchString: ''
        };

        this.serachref = createRef('');

        this.handleInput = this.handleInput.bind(this);

        this.debounceFunc = debouncingFunction(this.handleInput, 3000);

    }

    handleInput = () => {

        console.log(this.serachref.current.value);
    }

    render() {


        return (
            <Fragment>
                <input type='text' ref={this.serachref} onChange={() => {
                    this.debounceFunc()
                }} />

            </Fragment>
        )


    }

}

export default Basic;