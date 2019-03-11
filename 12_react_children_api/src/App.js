import React, { Component } from 'react';

import './App.css';
import './slideShow.css';

import ReactChildrenA from './components/ReactChildrenA';
import ReactChildrenB from './components/ReactChildrenB';
import ReactChildrenCount from './components/ReactChildrenCount';
import SlideShow from './components/SlideShow';

class App extends Component {

  render() {

    return (

      <div className="App">

        <ReactChildrenA>
          <p>Hello from ReactChildrenA component, Only one element could be passed.</p>
        </ReactChildrenA>

        <ReactChildrenB>
          <p>Hello from ReactChildrenB component.</p>
          <p>Mutltiple component could be passed.</p>
        </ReactChildrenB>

        <ReactChildrenCount>
          <p>Hello from ReactChildrenB component.</p>
          <p>Mutltiple component could be passed.</p>
        </ReactChildrenCount>
        {
          /* https://github.com/reactjs/react-transition-group */
        }
        <SlideShow>
          <img className="slideShowImage" src="https://miro.medium.com/max/1120/1*yQPzM3BaubJgWQkoL29iOw.png" />
          <img className="slideShowImage" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/108383635/original/626f1fda69305efcb5076c8af2be5393c53ecda4/develop-and-fix-reactjs-web-application.png" />
          <img className="slideShowImage" src="https://www.cloudways.com/blog/wp-content/uploads/Why-ReactJS-Should-be-a-Perfect-Choice-for-Your-Next-Front-end-Application-Banner.jpg" />
        </SlideShow>

      </div>
    );
  }
}

export default App;
