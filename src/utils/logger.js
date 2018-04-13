const moment = require('moment');
const winston = require('winston');

const { VERBOSE = 'info' } = process.env;

const logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      timestamp: function() {
        return moment().format();
      },
      formatter: function(options) {
        // Return string will be passed to logger.
        return (
          `[${options.timestamp()}]` +
          ' ' +
          options.level.toUpperCase() +
          ' ' +
          (options.message ? options.message : '') +
          (options.meta && Object.keys(options.meta).length
            ? '\n\t' + JSON.stringify(options.meta)
            : '')
        );
      },
      level: VERBOSE,
      colorize: true
    })
  ]
});

module.exports = logger;
