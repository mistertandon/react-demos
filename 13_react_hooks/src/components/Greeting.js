import React, { useState } from 'react';

export default function Greeting() {

  const [username, setUsername] = useState('mistertandon')

  function handleUsernameChange(event) {

    setUsername(event.target.value);
  }

  return (

    <section>
      <input name="username" value={username} onChange={handleUsernameChange} />
    </section>
  )
}