"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Manager = (function () {
	function Manager() {
		_classCallCheck(this, Manager);

		this.config = [];
		this.loadedConfig = false;
		this.features = {};
	}

	_createClass(Manager, [{
		key: "addConfig",
		value: function addConfig(config) {
			this.config.push(config);
			this.loadedConfig = false;
		}
	}, {
		key: "get",
		value: function get(name) {
			this.loadConfig();
			return this.features[name];
		}
	}, {
		key: "set",
		value: function set(name, feature) {
			this.loadConfig();
			this.features[name] = feature;
		}
	}, {
		key: "loadConfig",
		value: function loadConfig() {
			if (this.config.length !== 0 && !this.loadedConfig) {
				this.features = {};
				this.loadedConfig = true;
				for (var i = 0; i < this.config.length; i++) {
					var rules = this.config[i].rules();
					if (rules) {
						for (var rule in rules) {
							this.set(rule, rules[rule]);
						}
					}
				}
			}
		}
	}]);

	return Manager;
})();

exports.Manager = Manager;