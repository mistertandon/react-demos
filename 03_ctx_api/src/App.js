import React from 'react';
import Basic from './components/Basic'
import { UserProvider } from './contexts/UserContext'

import './App.css';

function App() {

  return (
    <div className="App">

      <UserProvider>
        <Basic />
      </UserProvider>

    </div>
  );

}

export default App;
