const path = require('path');

const jsLoader = {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    options: {
        presets: ['env']
    }
};

const jsxLoader = {
    test: /\.jsx$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    options: {
        presets: ['env', 'react']
    }
};

const outputTemplate = {
	path: path.join(__dirname, "build"),
    filename: "[name].bundle.js"
};

const alias = {
	Common: path.resolve(__dirname, 'src/common/'),
	Client: path.resolve(__dirname, 'src/client/'),
	Server: path.resolve(__dirname, 'src/server/')
};

const serverConfig = {
	target: 'node',
	entry: {
		server: './src/server/index.js'
	},
	output: outputTemplate,
	module: {
		loaders: [
			jsxLoader,
			jsLoader
		]
	},
	resolve: {
		alias,
		extensions: ['.js', '.jsx', '.css', '.less']
	}
};

const clientConfig = {
	target: 'web',
	entry: {
		client: './src/client/index.js'
	},
	output: outputTemplate,
	module: {
		loaders: [
			jsxLoader,
			jsLoader
		]
	},
	resolve: {
		alias,
		extensions: ['.js', '.jsx', '.css', '.less']
	}
};

module.exports = [serverConfig, clientConfig];