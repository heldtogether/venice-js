'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _bucketerJs = require('./bucketer.js');

var _featureJs = require('./feature.js');

var Factory = (function () {
	function Factory(session) {
		_classCallCheck(this, Factory);

		this.session = session;
	}

	_createClass(Factory, [{
		key: 'create',
		value: function create(experiment, definition) {
			var variants = definition['variants'];
			var bucketer = new _bucketerJs.Bucketer(experiment, variants, this.session);

			var feature = new _featureJs.Feature(bucketer);
			return feature;
		}
	}]);

	return Factory;
})();

exports.Factory = Factory;