[https://www.accelebrate.com/blog/the-real-benefits-of-the-virtual-dom-in-react-js](Virtual DOM benefit)
[https://www.codementor.io/blog/react-optimization-5wiwjnf9hj](21 Performance Optimization Techniques for React Apps)
 - Using Immutable Data Structures
 - Function/Stateless Components and React.PureComponent
 - Multiple Chunk Files
   - If you are using the latest version of webpack, you can also consider [https://webpack.js.org/plugins/split-chunks-plugin/](SplitChunksPlugin)
 - [https://github.com/GoogleChromeLabs/webpack-libs-optimizations](Dependency optimization)
 - Use React.Fragments to Avoid Additional HTML Element Wrappers.
 - Avoid Inline Function Definition in the Render Function
 - Throttling and Debouncing Event Action in JavaScript
 - Avoid using Index as Key for map
   - `import shortid from  "shortid"; {shortid.generate()}`
 - Spreading props on DOM elements
 - Memoize React Components
 - CSS Animations Instead of JS Animations
 - Using a CDN
 - Using Web Workers for CPU Extensive Tasks
 - Analyzing and Optimizing Your Webpack Bundle Bloat. `webpack-bundle-analyzer`