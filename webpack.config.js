module.exports = {
    entry: './js/app.js',
    output: {
        path: __dirname + '/js',
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015'],
            }
        },
        { test: /\.html$/, loader: "html" },
        { test: /\.css$/, loader: "style!css" }
      ]
    },
    devtool: "#inline-source-map"
}
