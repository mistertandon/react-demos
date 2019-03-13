import React, { useState } from 'react';

import CharPicker from './components/CharPicker';
import Character from './components/Character';

const App = () => {

  const [selectedCharacter, setselectedCharacter] = useState(1);

  const [choosenSide, setChoosenSide] = useState('light');

  const [destroyed, setdestroyed] = useState(false);

  const sideHandler = side => {
    setChoosenSide(side);
  };

  const charSelectHandler = event => {

    const charId = event.target.value;
    setselectedCharacter(charId);
  };

  const destructionHandler = () => {

    setdestroyed(true);
  };


  let content = (

    <React.Fragment>

      <CharPicker
        side={choosenSide}
        selectedChar={selectedCharacter}
        onCharSelect={charSelectHandler}
      />

      <Character selectedChar={selectedCharacter} />

      <button onClick={sideHandler.bind(null, 'light')}>
        Light Side
      </button>

      <button onClick={sideHandler.bind(null, 'dark')}>
        Dark Side
      </button>

      {
        choosenSide === 'dark' && (
          <button onClick={destructionHandler}>
            DESTROY!
        </button>
        )
      }

    </React.Fragment>
  );

  if (destroyed) {

    content = <h1>Total destruction!</h1>;
  }

  return content;
}

export default App;
