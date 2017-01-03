'use strict';

const common_config = {
  saltRound: 10
};
const config = {
  development: {
    env: 'development',
    port: 8000,
    config: common_config
  },
  staging: {
    env: 'staging',
    port: process.env.PORT,
    config: common_config
  },
  production: {
    env: 'production',
    port: 8080,
    config: common_config
  },
};

module.exports = function(env) {
  return config[env || process.argv[2] || 'development'] || config.development;
};
