var config = require('./config.global');

config.env = "development";
config.SOCKET = process.env.CONNECTION || 'http://localhost:5555';
config.port = 5000;

module.exports = config;
