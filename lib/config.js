"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Config = (function () {
	function Config(factory) {
		_classCallCheck(this, Config);

		this.definition = {};
		this.factory = factory;
	}

	_createClass(Config, [{
		key: "setDefintion",
		value: function setDefintion(definition) {
			this.definition = definition;
		}
	}, {
		key: "rules",
		value: function rules() {
			var rules = {};
			for (var feature in this.definition) {
				rules[feature] = this.factory.create(feature, this.definition[feature]);
			}
			return rules;
		}
	}]);

	return Config;
})();

exports.Config = Config;