const webpack = require('webpack');

module.exports = {
  // Other configurations...
  output: {
    hashFunction: 'xxhash64'
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};
