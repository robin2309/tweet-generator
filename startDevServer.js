const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const nodemon = require('nodemon');

const configs = require('./webpack/webpack.config.devserver.js');
const logger = require('./src/utils/logger');

const port = 3330;
let nodemonStarted = false;

const options = {
  publicPath: configs.client.output.publicPath,
  hot: true,
  inline: true,
  port: port,
  host: '0.0.0.0',
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  stats: { colors: true }
};

WebpackDevServer.addDevServerEntrypoints(configs.client, options);
const clientCompiler = webpack(configs.client);
const devServer = new WebpackDevServer(clientCompiler, options);

devServer.listen(port, 'localhost', function(err) {
  if (err) {
    console.log(err);
  }
  logger.info('WebpackDevServer listening at localhost:', port);
});

const serverCompiler = webpack(configs.server);

const startNodemon = () => {
  nodemonStarted = true;
  nodemon({
    script: './build/server.bundle.js',
    ext: 'js',
    env: {
      DEV_SERVER: 'true',
      PORT: 3333,
      VERBOSE: 'info',
      NODE_ENV: 'development'
    }
  });
  nodemon.on('start', function() {
    logger.info('App has started');
  }).on('quit', function() {
    logger.info('App has quit');
    process.exit();
  }).on('restart', function(files) {
    logger.info('Nodemon restarted the App');
  });
};

const logBuildStats = (stats) => {
  console.log('\n');
  console.log(stats.toString({
    chunks: false,
    colors: true
  }));
  console.log('\n');
};

serverCompiler.watch({
  aggregateTimeout: 300,
  poll: undefined
}, (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }
  if (!nodemonStarted) startNodemon();
  logBuildStats(stats);
});
