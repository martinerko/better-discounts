const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.dev');

const STATIC_PATH = 'public';
const PORT = 7777;

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(STATIC_PATH));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, STATIC_PATH, 'index.html'));
});

app.listen(PORT, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost:${PORT}`);
});
