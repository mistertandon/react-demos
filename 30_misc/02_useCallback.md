## useCallBcck

> In case when we want to maintain a single function instance between renderings:
 - A functional component wrapped inside React.memo() accepts a function object prop
 - When the function object is a dependency to other hooks, e.g. useEffect(..., [callback])