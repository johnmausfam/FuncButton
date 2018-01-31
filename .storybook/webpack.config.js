module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: [
          "style-loader",
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(sass|scss)$/, loader: [
          "style-loader",
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.(svg|png|jpeg|jpg|gif)$/,
        use: [
          "file-loader"
        ]
      }
    ]
  }
};
