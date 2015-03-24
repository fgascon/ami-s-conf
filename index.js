var AsteriskManager = require('asterisk-manager-pool');
var config = require('s-conf');

module.exports = AsteriskManager(config.require('ami'));
