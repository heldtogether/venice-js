import { assert } from 'chai'
import { Feature } from '../src/feature.js'

var sinon = require('sinon');

describe('Feature', () => {

	it('can create', () => {
		var feature = new Feature;
		assert.instanceOf(feature, Feature);
	});

	it('can check if active', () => {
		var feature = new Feature;
		assert.isTrue(feature.active());
	});

	it('requests the variant from the bucketer', () => {
		var bucketer = { variant: function () {} };

		var variant = 'control';

		var mock = sinon.mock(bucketer);
		mock.expects('variant').once().returns(variant);

		var feature = new Feature(bucketer);

		assert.equal(feature.variant(), variant);
		mock.verify();
	});

})
