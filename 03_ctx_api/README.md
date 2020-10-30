## Context API

 - [Context API](https://reactjs.org/docs/context.html#when-to-use-context) documentation
 - Context provides a way to pass data through the component tree without having to pass props down manually at every level.
 - Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
   - ```  <UserContext.Provider value={/* some value */}> ``` The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers.
 -  A React component that subscribes to context changes.
    -  ```  <UserContext.Consumer> </UserContext.Consumer> ``` This lets you subscribe to a context within a function component. Requires a function as a child. The function receives the current context value and returns a React node. The value argument passed to the function will be equal to the value prop of the closest Provider for this context above in the tree.
 