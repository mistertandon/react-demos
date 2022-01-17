import './App.scss';
import ChildA from './components/ChildA';
import ChildB from './components/ChildB';
import { CounterProvider } from './context/CounterProvider'
function App() {
  return (
    <div className="">
      <header className="">

      </header>
      <CounterProvider>
        <ChildA />
        <ChildB />
      </CounterProvider>
    </div>
  );
}

export default App;
