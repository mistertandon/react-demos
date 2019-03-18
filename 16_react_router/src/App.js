import React, { Component, Fragment } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import About from './components/About';
import Books from './components/Books';

class App extends Component {

  render() {

    return (

      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/guest">Guest</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about" component={About} />
          <Route path="/books" component={Books} />
          <Route path="/guest" render={
            () => {

              return <div>Hello from Guest component</div>
            }
          } />
          <Route path="/" component={Home} />
        </Switch>

      </Router>
    );
  }
}

export default App;
