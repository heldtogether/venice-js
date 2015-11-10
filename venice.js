'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _bucketerJs = require('./lib/bucketer.js');
var _configJs = require('./lib/config.js');
var _factoryJs = require('./lib/factory.js');
var _featureJs = require('./lib/feature.js');
var _managerJs = require('./lib/manager.js');
var _sessionJs = require('./lib/session.js');

exports.Bucketer = _bucketerJs.Bucketer;
exports.Config = _configJs.Config;
exports.Factory = _factoryJs.Factory;
exports.Feature = _featureJs.Feature;
exports.Manager = _managerJs.Manager;
exports.Session = _sessionJs.Session;

exports.init = function(definition) {
	var session = new _sessionJs.Session();

	var factory = new _factoryJs.Factory(session);

	var config = new _configJs.Config(factory);
	config.setDefintion(definition);

	var manager = new _managerJs.Manager();
	manager.addConfig(config);
	return manager;
};
