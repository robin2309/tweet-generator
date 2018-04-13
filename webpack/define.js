const getApiUrlClient = (defaultValue) => {
  if (process.env.API_URL_CLIENT) return JSON.stringify(process.env.API_URL_CLIENT);
  if (process.env.API_URL) return JSON.stringify(process.env.API_URL);
  return JSON.stringify(defaultValue);
};

const getAuthEndpointBack = (defaultValue) => {
  if (process.env.AUTH_ENDPOINT_BACK) return JSON.stringify(process.env.AUTH_ENDPOINT_BACK);
  if (process.env.AUTH_ENDPOINT) return JSON.stringify(process.env.AUTH_ENDPOINT);
  return JSON.stringify(defaultValue);
};

const devServer = {
  client: {
    'process.env.API_URL': getApiUrlClient(''),
    'process.env.NODE_ENV': (process.env.NODE_ENV && JSON.stringify(process.env.NODE_ENV)) || JSON.stringify('development'),
    '__CONFIGS__': {
      isDevServer: true
    }
  },
  server: {
    'process.env.AUTH_ENDPOINT_BACK': getAuthEndpointBack(''),
    'process.env.API_URL': process.env.API_URL || JSON.stringify(''),
    '__CONFIGS__': {
      isDevServer: true
    }
  }
};

const prod = {
  client: {
    'process.env.API_URL': getApiUrlClient(''),
    'process.env.NODE_ENV': (process.env.NODE_ENV && JSON.stringify(process.env.NODE_ENV)) || JSON.stringify('production'),
    '__CONFIGS__': {
      isDevServer: false
    }
  },
  server: {
    'process.env.AUTH_ENDPOINT_BACK': getAuthEndpointBack(''),
    '__CONFIGS__': {
      isDevServer: false
    }
  }
};

module.exports = {
  devServer: devServer,
  prod: prod
};
