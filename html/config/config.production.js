var config = require('./config.global');

config.env = "development";
config.SOCKET = process.env.CONNECTION || '';
config.port = 5000;

module.exports = config;
