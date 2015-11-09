"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bucketer = (function () {
	function Bucketer(experiment, variants, session) {
		_classCallCheck(this, Bucketer);

		this.experiment = experiment;
		this.variants = variants;
		this.session = session;
	}

	_createClass(Bucketer, [{
		key: "variant",
		value: function variant() {
			var variant = this.session.variant(this.experiment);

			if (!variant) {
				var limit = 1 / this.variants.length;
				var random = Math.random();
				var index = Math.floor((random * 10 - 0.1) / (limit * 10));
				variant = this.variants[index];

				this.session.setVariant(this.experiment, variant);
			}

			return variant;
		}
	}]);

	return Bucketer;
})();

exports.Bucketer = Bucketer;