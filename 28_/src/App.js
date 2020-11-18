import React, { useEffect, useState } from 'react';

const App = () => {

  const [count, setCount] = useState(5);

  useEffect(
    () => {

      if (timeRef) {

        clearInterval(timeRef);
      }

      const updateCounter = (refCount) => {

        setCount(refCount - 1);
      }

      if (count > 0) {

        var timeRef = setInterval(function () {

          let countContext = count;
          updateCounter(countContext);
        },
          2000);
      }

    }, [count]
  )

  return (
    <div className="App">
      {
        count
      }
    </div>
  );
}

export default App;
