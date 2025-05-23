const path = require('path');

module.exports = {
  entry: {
    app: './src/dropdown.js',
  },
  output: {
    filename: 'dropdown.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
