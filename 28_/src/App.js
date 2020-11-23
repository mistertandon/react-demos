import { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const SpaceX = lazy(() => import('./components/SpaceX'));

class App extends Component {

  render() {

    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>

            <Route exact path='/' component={SpaceX} />

          </Switch>
        </Suspense>
      </Router>
    );

  }
}

export default App;
