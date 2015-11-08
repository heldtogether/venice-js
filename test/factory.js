import { assert } from 'chai'
import { Factory } from '../src/factory.js'
import { Feature } from '../src/feature.js'

var definition = {
	'type': 'variant',
	'variants': [
		'control',
		'variant-1'
	]
};

describe('Factory', () => {

	it('can create', () => {
		var factory = new Factory;
		assert.instanceOf(factory, Factory);
	});

	it('can create feature', () => {
		var factory = new Factory;
		assert.instanceOf(factory.create('experiment-1', definition), Feature);
	});

});
