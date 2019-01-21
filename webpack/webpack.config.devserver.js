const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const nodeExternals = require('webpack-node-externals');
const defineVars = require('./define');

const BABEL_LOADER_PLUGINS = [
  require.resolve('@babel/plugin-proposal-class-properties'),
  require.resolve('@babel/plugin-proposal-object-rest-spread')
];

const jsLoader = {
  test: /\.js$/,
  loader: 'babel-loader',
  exclude: /node_modules/,
  options: {
      presets: ['@babel/preset-env'],
      plugins: BABEL_LOADER_PLUGINS
  }
};

const jsxLoader = {
  test: /\.jsx$/,
  loader: 'babel-loader',
  exclude: /node_modules/,
  options: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: BABEL_LOADER_PLUGINS
  }
};

const outputTemplate = {
	path: path.join(__dirname, "../build"),
	filename: "[name].bundle.js"
};

const cssLoader = {
  test: /\.css$/,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader'
  ]
};

const lessExtractLoader = {
  test: /\.less$/,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader', 
    'less-loader'
  ]
};

const alias = {
  Common: path.resolve(__dirname, '../src/common/'),
	Components: path.resolve(__dirname, '../src/common/components/'),
	Containers: path.resolve(__dirname, '../src/common/containers/'),
	Client: path.resolve(__dirname, '../src/client/'),
	Server: path.resolve(__dirname, '../src/server/'),
	Configs: path.resolve(__dirname, '../src/configs'),
	Utils: path.resolve(__dirname, '../src/utils/'),
	Reducers: path.resolve(__dirname, '../src/common/reducers/'),
  Actions: path.resolve(__dirname, '../src/common/actions/'),
  Layouts: path.resolve(__dirname, '../src/common/layouts/')
};

const clientConfig = {
  target: 'web',
  mode: 'development',
  cache: false,
  entry: {
    client: [
      'babel-polyfill',
      'react-hot-loader/patch',
      './src/client/index'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].bundle.js',
    publicPath: 'http://localhost:3330/build/'
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: BABEL_LOADER_PLUGINS.concat(['react-hot-loader/babel'])
            }
          }
        ]
      },
      { 
        test: /\.jsx$/, 
        exclude: /node_modules/, 
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: BABEL_LOADER_PLUGINS.concat(['react-hot-loader/babel'])
            }
          }
        ]
      },
      cssLoader,
      lessExtractLoader
    ]
  },
  resolve: {
		alias,
		extensions: ['.js', '.jsx', '.css', '.less']
  },
  plugins: [
    new webpack.DefinePlugin(defineVars.devServer.client),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'source-map'
}

const serverConfig = {
  target: 'node',
  mode: 'development',
	entry: {
		server: [
      'babel-polyfill',
      './src/server/index.js'
    ]
  },
  externals: [nodeExternals()],
	output: outputTemplate,
	module: {
		rules: [
			jsxLoader,
			jsLoader
		]
  },
  plugins: [
    new webpack.DefinePlugin(defineVars.devServer.server)
  ],
	resolve: {
		alias,
		extensions: ['.js', '.jsx']
	}
};

module.exports = {
  client: clientConfig,
  server: serverConfig
};
