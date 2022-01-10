## What are React controlled components and uncontrolled components?
> Uncontrolled component and Controlled component are terms used to describe React components that render HTML form elements.

> Uncontrolled components and Controlled components differ in the way they access the data from the form elements

### Uncontrolled Components
> An uncontrolled component is a component that renders form elements, where the form element's data is handled by the DOM (default DOM behavior). To access the input's DOM node and extract its value you can use a ref.
```
const { useRef } from 'react';

function Example () {
  const inputRef = useRef(null);
  return <input type="text" defaultValue="bar" ref={inputRef} />
}
```

### Controlled Components
> A controlled component is a component that renders form elements and controls them by keeping the form data in the component's state.

> In a controlled component, the form element's data is handled by the React component (not DOM) and kept in the component's state. A controlled component basically overrides the default behavior of the HTML form elements.

```
const { useState } from 'react';

function Controlled () {
  const [email, setEmail] = useState();

  const handleInput = (e) => setEmail(e.target.value);


  return <input type="text" value={email} onChange={handleInput} />;
}
```