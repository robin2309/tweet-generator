const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const nodeExternals = require("webpack-node-externals");
const defineVars = require("./define");

const BABEL_LOADER_PLUGINS = [
  require.resolve("@babel/plugin-proposal-class-properties"),
  require.resolve("@babel/plugin-proposal-object-rest-spread"),
  require.resolve("@babel/plugin-transform-runtime")
];

const jsLoader = {
  test: /\.js$/,
  loader: "babel-loader",
  exclude: /node_modules/,
  options: {
    presets: ["@babel/preset-env"],
    plugins: BABEL_LOADER_PLUGINS
  }
};

const jsxLoader = {
  test: /\.jsx$/,
  loader: "babel-loader",
  exclude: /node_modules/,
  options: {
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: BABEL_LOADER_PLUGINS
  }
};

const cssLoader = {
  test: /\.css$/,
  use: [MiniCssExtractPlugin.loader, "css-loader"]
};

const lessExtractLoader = {
  test: /\.less$/,
  use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
};

const outputTemplate = {
  publicPath: "/static",
  path: path.join(__dirname, "../build"),
  filename: "[name].bundle.js"
};

const alias = {
  Common: path.resolve(__dirname, "../src/common/"),
  Components: path.resolve(__dirname, "../src/common/components/"),
  Containers: path.resolve(__dirname, "../src/common/containers/"),
  Client: path.resolve(__dirname, "../src/client/"),
  Server: path.resolve(__dirname, "../src/server/"),
  Configs: path.resolve(__dirname, "../src/configs"),
  Utils: path.resolve(__dirname, "../src/utils/"),
  Reducers: path.resolve(__dirname, "../src/common/reducers/"),
  Actions: path.resolve(__dirname, "../src/common/actions/"),
  Layouts: path.resolve(__dirname, "../src/common/layouts/")
};

const clientConfig = {
  target: "web",
  mode: "production",
  entry: {
    client: "./src/index.js"
  },
  output: outputTemplate,
  module: {
    rules: [jsxLoader, jsLoader, cssLoader, lessExtractLoader]
  },
  resolve: {
    alias,
    extensions: [".js", ".jsx", ".css", ".less"]
  },
  plugins: [
    new webpack.DefinePlugin(defineVars.prod.client),
    new MiniCssExtractPlugin({
      filename: "styles.css"
    })
  ],
  devtool: "source-map"
};

module.exports = clientConfig;
