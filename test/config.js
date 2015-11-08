import { assert } from 'chai'
import { Config } from '../src/config.js'

var sinon = require('sinon');

var definition = {
	'experiment-1': {
		'type': 'variant',
		'variants': [
			'control',
			'variant-1'
		]
	}
};

describe('Config', () => {

	it('can create', () => {
		var config = new Config;
		assert.instanceOf(config, Config);
	});

	it('can set definition', () => {
		var config = new Config;
		config.setDefintion(definition);
		assert.equal(config.definition, definition);
	});

	it('calls the factory for each of the rules', () => {
		var factory = { create: function () {} };

		var mock = sinon.mock(factory);
		mock.expects('create').once().withArgs(definition['experiment-1']);

		var config = new Config(factory);
		config.setDefintion(definition);
		config.rules();

		mock.verify();
	});

});
