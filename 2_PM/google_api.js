// TODO - create client object for Google API connection which can be exported
const config = require('./config');

const googleMapsClient = require('@google/maps','./config').createClient({
    key: config.key,

  });

  module.exports = googleMapsClient;

