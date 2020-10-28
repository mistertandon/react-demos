import logo from './logo.svg';
import './App.css';

import BuggyCounter from './components/BuggyCounter'
import ErrorBoundary from './errors/ErrorBoundary'

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

    </div>
  );
}

export default App;
