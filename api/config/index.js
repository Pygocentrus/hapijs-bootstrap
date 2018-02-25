const env = process.env.NODE_ENV;
const isProduction = env === 'production';
const isStaging = env === 'staging';
const isDevelopment = !env || env === 'develoment';

let envDefinedConf = {};
if (isProduction) {
  envDefinedConf = require('./_production');
} else if (isStaging) {
  envDefinedConf = require('./_staging');
} else if (isDevelopment) {
  envDefinedConf = require('./_develoment');
}

const sharedConf = {};

module.exports = {
  ...sharedConf,
  ...envDefinedConf,
};
