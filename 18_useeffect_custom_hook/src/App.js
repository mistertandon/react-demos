import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';

import './App.css';

const useHackerNewsApi = () => {

  const [data, setData] = useState({
    hits: []
  })

  const [url, setUrl] = useState('https://hn.algolia.com/api/v1/search?query=redux')

  const [isError, setIsError] = useState(false)

  const [isLoading, setIsLoading] = useState(false)

  useEffect(
    () => {

      const fetchData = async () => {

        setIsLoading(true)

        try {

          const result = await axios(url)

          setData(result.data)
          setIsError(false)
        }
        catch (error) {
          setIsError(true)
        }

        setIsLoading(false)
      }

      fetchData()

    }, [url]
  )

  return [{ data, isError, isLoading }, setUrl]
}

function App() {

  const [{ data, isError, isLoading }, doFetch] = useHackerNewsApi()

  const [query, setQuery] = useState('redux')

  return (
    <Fragment>

      <form onSubmit={(event) => {

        doFetch(`https://hn.algolia.com/api/v1/search?query=${query}`)
        event.preventDefault()
      }}>

        <input type="text" value={query} onChange={event => setQuery(event.target.value)} />

        <button type="submit">Search</button>
      </form>

      {

        !isLoading &&
        isError &&
        (
          <div>Error happen...</div>
        )

      }
      {

        isLoading &&
        !isError &&
        (
          <div>Loading...</div>
        )
      }
      {

        !isLoading &&
        !isError &&
        (
          <div>
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

          </div>
        )

      }

    </Fragment>
  );
}

export default App;