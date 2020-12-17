[Optimize your libraries with webpack](https://github.com/GoogleChromeLabs/webpack-libs-optimizations)
> Use various babel plugin to strip unused modules. Few are below
 - async, async-es
   - `async-es` is a collection of utilities for working with async functions. It’s the same package as `async` , but it’s more optimized for bundling with webpack.
   - Remove unused methods with `babel-plugin-lodash`
 - babel-polyfill, core-js
   - babel-polyfill is a Babel’s package that loads core-js and a custom regenerator runtime.
   - Remove unnecessary polyfills with `babel-preset-env`
 - date-fns
   - Enable `babel-plugin-date-fns`.
   - `babel-plugin-date-fns` replaces full imports of date-fns with imports of specific date-fns functions.
 - handlebars
  - lodash, lodash-es
   - Enable babel-plugin-lodash
   - `babel-plugin-lodash` replaces full imports of Lodash with imports of specific Lodash functions:
 - moment
   - Remove unused locales with `moment-locales-webpack-plugin`
 - moment-timezone
   - Remove unused data with `moment-timezone-data-webpack-plugin`
 - react
   - Remove `propTypes` declarations in production.
   - Use `babel-plugin-transform-react-remove-prop-types` to remove them from during building.
 - ractive
 - reactstrap
   - Remove unused modules with `babel-plugin-transform-imports`
 - react-bootstrap
   - Remove unused modules with `babel-plugin-transform-imports`
        > // Before<br>
        import { Grid, Row, Col } from 'react-bootstrap';<br>
        // After<br>
        import Grid from 'react-bootstrap/lib/Grid';<br>
        import Row from 'react-bootstrap/lib/Row';<br>
        import Col from 'react-bootstrap/lib/Col';
    
 - react-router
   - Remove unused modules with `babel-plugin-transform-imports`
 - styled-components
 - whatwg-fetch