#### React Routes

#### Supported artical
 - [React Routes](https://medium.freecodecamp.org/beginners-guide-to-react-router-4-8959ceb3ad58)
 - There are three general approaches to [code splitting](https://webpack.js.org/guides/code-splitting/#dynamic-imports) available:

    - Entry Points: Manually split code using entry configuration.
    - Prevent Duplication: Use the SplitChunksPlugin to dedupe and split chunks.
    - Dynamic Imports: Split code via inline function calls within modules.


 - [Dynamic-imports](https://webpack.js.org/guides/code-splitting/#dynamic-imports) Docs
   - SplitChunksPlugin
The SplitChunksPlugin allows us to extract common dependencies into an existing entry chunk or an entirely new chunk. Let's use this to de-duplicate the lodash dependency from the previous example:
 - [Webpack Caching](https://webpack.js.org/guides/caching/#output-filenames)
   - We can use the output.filename substitutions setting to define the names of our output files. webpack provides a method of templating the filenames using bracketed strings called substitutions. The [contenthash] substitution will add a unique hash based on the content of an asset. When the asset's content changes, [contenthash] will change as well.

    ```
    module.exports = {
    entry: './src/index.js',
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
       title: 'Caching',
      }),
    ],
    output: {
     filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
    },
  };
   ```
