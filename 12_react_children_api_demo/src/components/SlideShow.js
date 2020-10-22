import React, { Component, Children, Fragment } from 'react'

class SlideShow extends Component {

    constructor(props) {

        super(props);

        this.state = {
            total: 0,
            current: 0
        }

        this.slider = this.slider.bind(this);
    }

    slider = () => {

        this.setState(
            (prevState) => ({
                current: ((prevState.current + 1) >= prevState.total - 1) ?
                    0 :
                    (prevState.current + 1)
            }))

    }

    render() {

        const { children } = this.props;
        const { current, total } = this.state;

        const bullets = Array(total).fill("Θ");
        bullets[current] = "◉"

        return (
            <Fragment>
                {
                    bullets
                }
                {
                    Children.toArray(children)[current]
                }
            </Fragment>
        )
    }

    componentDidMount() {

        this.setState(() => ({ total: Children.count(this.props.children) }))

        this.interval = setInterval(this.slider, 3000)
    }

    componentWillUnmount() {

        clearInterval(this.interval)
    }
}

export default SlideShow;