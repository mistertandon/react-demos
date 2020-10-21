import React, {useEffect, useState} from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

function App() {

  const [data, setData] = useState({
    hits: []
  })

  useEffect(
    async () => {

      const result = await axios(
        'https://hn.algolia.com/api/v1/search?query=redux'
      )

      setData(result.data)
    }
  )

  return (
    <div className="App">
      {
        data.hits.map(item => (
          <li key={item.objectId}>
            <a href={item.url}>
              {
                item.title
              }
            </a>
          </li>
        ))
      }
    </div>
  );
}

export default App;
