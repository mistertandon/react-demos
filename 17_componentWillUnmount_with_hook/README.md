# Getting Started with Create React App

```
useEffect(() => { 
   document.addEventListener('click', handleClick);

   return function cleanup () {
     document.removeEventListener('click', handleClick);
   }
}, [])
```

> Here we return a cleanup function with the removing logic of our event. As per react hooks rule whenever an effect received a return function it runs only at the time of cleanup of the component.

