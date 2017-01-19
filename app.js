const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.dev');
const appConfig = require('./config');

const STATIC_PATH = 'public';
const SERVER_PORT = appConfig.app.SERVER_PORT;

const app = express();
const compiler = webpack(webpackConfig);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: webpackConfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

// routes
app.use('/auth', require('./routes/auth'));

app.use(express.static(STATIC_PATH));

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, STATIC_PATH, 'index.html'));
});

// connect to Mongo when the app initializes
mongoose.connect('mongodb://localhost/coles');

app.listen(SERVER_PORT, 'localhost', (err) => {
	if (err) {
		console.log(err);
		return;
	}

	console.log(`Listening at http://localhost:${SERVER_PORT}`);
});
