import React, { Component, Children, Fragment } from 'react';

class SlideShow extends Component {

  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      current: 0
    }

    this.moveSlideShow = this.moveSlideShow.bind(this);
  }

  moveSlideShow = () => {

    this.setState(
      (prevState) => (
        {
          current: (prevState.current + 1) >= prevState.total ? 0 : prevState.current + 1
        }
      )
    )
  }

  render() {

    const { children } = this.props;
    const { current, total } = this.state;
    const bullets = Array(total).fill("Θ");
    bullets[current] = "◉"

    return (
      <Fragment>
        <div>
          {bullets}
        </div>
        <div className="slideShow">
          {Children.toArray(children)[current]}
        </div>
      </Fragment>

    )
  }

  componentWillUnmount() {

    clearInterval(this.interval);
  }

  componentDidMount() {

    const { children } = this.props;

    this.setState(
      (prevState) => (
        {
          total: Children.count(children),
          current: 0
        }
      )
    );

    this.interval = setInterval(this.moveSlideShow, 2000);
  }
}

export default SlideShow;