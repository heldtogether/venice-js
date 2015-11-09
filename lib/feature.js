"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Feature = (function () {
	function Feature(bucketer) {
		_classCallCheck(this, Feature);

		this.bucketer = bucketer;
	}

	_createClass(Feature, [{
		key: "active",
		value: function active() {
			return true;
		}
	}, {
		key: "variant",
		value: function variant() {
			return this.bucketer.variant();
		}
	}]);

	return Feature;
})();

exports.Feature = Feature;