const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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

const cssLoader = {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract({
    	use: 'css-loader'
    })
};

const scssLoader = {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract({
    	fallback: 'style-loader',
    	use: ['css-loader', 'sass-loader']
    })
};

const outputTemplate = {
	path: path.join(__dirname, "build"),
	filename: "[name].bundle.js"
};

const alias = {
	Common: path.resolve(__dirname, 'src/common/'),
	Components: path.resolve(__dirname, 'src/common/components/'),
	Containers: path.resolve(__dirname, 'src/common/containers'),
	Client: path.resolve(__dirname, 'src/client/'),
	Server: path.resolve(__dirname, 'src/server/'),
	Configs: path.resolve(__dirname, 'configs/'),
	Utils: path.resolve(__dirname, 'src/utils/')
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
			jsLoader,
			{ // no css on the server bundle !
				test: /\.scss$/,
				loader: 'ignore-loader',
			},
			{ // no css on the server bundle !
				test: /\.css$/,
				loader: 'ignore-loader'
			}
		]
	},
	resolve: {
		alias,
		extensions: ['.js', '.jsx', '.css', '.scss']
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
			jsLoader,
			cssLoader,
			scssLoader
		]
	},
	resolve: {
		alias,
		extensions: ['.js', '.jsx', '.css', '.scss']
	},
	plugins: [
		new ExtractTextPlugin("styles.css"),
	],
	devtool: 'source-map'
};

module.exports = [serverConfig, clientConfig];
