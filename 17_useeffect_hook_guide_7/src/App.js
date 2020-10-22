import React from 'react';
import FormikForm from './components/FormikForm.js'

import './App.css';

function App() {
  return (
    <div className="App">
      <FormikForm email="enggparveshtandon@gmail.com" password="abc1234" newsletter={true} />
    </div>
  );
}

export default App;
