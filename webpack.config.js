const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src')]
      }
    ]
  },
  resolve: {
    // for resolve file ts/js, if not will not recognize imported file.
    extensions: [
      '.ts',
      '.js',
    ]
  },
  output: {
    // hot reload src/index.ts
    publicPath: 'public',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
};
