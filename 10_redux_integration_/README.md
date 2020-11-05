# Redux in React

## Redux 

- [Redux Data-flow](https://redux.js.org/basics/data-flow) documentation.
- The data lifecycle in any Redux app follows these 4 steps:
  - You call store.dispatch(action).
  - The Redux store calls the reducer function you gave it. The store will pass two arguments to the reducer: the current state tree and the action.
  - The root reducer may combine the output of multiple reducers into a single state tree.
  -  Redux ships with a combineReducers() helper function, useful for “splitting” the root reducer into separate functions that each manage one branch of the state tree.
  - The Redux store saves the complete state tree returned by the root reducer. This new tree is now the next state of your app! Every listener registered with store.subscribe(listener)

### `connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)`
- Connects is a React component to a Redux store.
- It does not modify the component class passed to it; instead, it returns a new, connected component for you to use.  
- Without arguments, just wraps the component, without changing the behavior / props
-  If a `mapStateToProps?: (state, ownProps?) => Object` function is specified, the new wrapper component will subscribe to Redux store updates.
   - Your `mapStateToProps` functions are expected to return an object. This object, normally referred to as stateProps, will be merged as props to your connected component. If you define mergeProps, it will be supplied as the first parameter to mergeProps.
- `mapDispatchToProps?: Object | (dispatch, ownProps?) => Object#`
  - If your `mapDispatchToProps` is declared as a function taking one parameter, it will be given the `dispatch` of your store.

## Thunk

`Redux Thunk middleware` allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.