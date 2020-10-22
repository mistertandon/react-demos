import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';

import './App.css';

function App() {

  const [data, setData] = useState({
    hits: []
  })

  const [query, setQuery] = useState('redux')
  const [url, setUrl] = useState('https://hn.algolia.com/api/v1/search?query=redux')

  useEffect(

    () => {

      const fetchData = async () => {

        const result = await axios(url)

        setData(result.data)
      }

      fetchData()
    }, [url]
  )

  return (
    <Fragment>

      <input type="text" value={query} onChange={event => setQuery(event.target.value)} />

      <button type="button" onClick={
        () => (
          setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
        )
      }
      >
        Search
      </button>
      {
        data.hits.map(item => (
          <li key={item.created_at_i}>
            <a href={item.url}>
              {
                item.title
              }
            </a>
          </li>
        ))
      }
    </Fragment>
  );
}

export default App;
