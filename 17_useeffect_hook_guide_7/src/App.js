import React from 'react';
import FormikForm from './components/FormikForm.js'

import './App.css';

function App() {
  return (
    <div className="App">
      {
        //<FormikForm email="enggparveshtandon@gmail.com" password="abc1234" newsletter={true} />
      }

      <FormikForm email="enggparveshtandon@gmail.com" password="abc123"/>
    </div>
  );
}

export default App;
