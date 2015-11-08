import { assert } from 'chai'
import { Bucketer } from '../src/bucketer.js'

var sinon = require('sinon');

describe('Bucketer', () => {

	it('can create', () => {
		var bucketer = new Bucketer;
		assert.instanceOf(bucketer, Bucketer);
	});

	it('requests if already bucketed from the session', () => {
		var session = { variant: function () {} };

		var experiment = 'experiment-1';
		var variant = 'control';

		var mock = sinon.mock(session);
		mock.expects('variant').withArgs(experiment).once().returns(variant);

		var bucketer = new Bucketer(experiment, [], session);
		assert.equal(bucketer.variant(), variant);

		mock.verify();
	});

	it('assigns to bucket if not already bucketed (control)', () => {
		var session = { variant: function () {}, setVariant: function () {} };

		var experiment = 'experiment-1';
		var variant = 'control';
		var variants = ['control', 'variant-1', 'variant-2'];

		var mock = sinon.mock(session);
		mock.expects('variant').withArgs(experiment).once().returns(false);
		mock.expects('setVariant').withArgs(experiment, variant).once();

		var stub = sinon.stub(Math, 'random');
		stub.returns(0.2);

		var bucketer = new Bucketer(experiment, variants, session);
		assert.equal(bucketer.variant(), variant);

		mock.verify();

		stub.restore();
	});

	it('assigns to bucket if not already bucketed (variant-1)', () => {
		var session = { variant: function () {}, setVariant: function () {} };

		var experiment = 'experiment-1';
		var variant = 'variant-1';
		var variants = ['control', 'variant-1', 'variant-2'];

		var mock = sinon.mock(session);
		mock.expects('variant').withArgs(experiment).once().returns(false);
		mock.expects('setVariant').withArgs(experiment, variant).once();

		var stub = sinon.stub(Math, 'random');
		stub.returns(0.5);

		var bucketer = new Bucketer(experiment, variants, session);
		assert.equal(bucketer.variant(), variant);

		mock.verify();

		stub.restore();
	});

	it('assigns to bucket if not already bucketed (variant-2)', () => {
		var session = { variant: function () {}, setVariant: function () {} };

		var experiment = 'experiment-1';
		var variant = 'variant-2';
		var variants = ['control', 'variant-1', 'variant-2'];

		var mock = sinon.mock(session);
		mock.expects('variant').withArgs(experiment).once().returns(false);
		mock.expects('setVariant').withArgs(experiment, variant).once();

		var stub = sinon.stub(Math, 'random');
		stub.returns(0.8);

		var bucketer = new Bucketer(experiment, variants, session);
		assert.equal(bucketer.variant(), variant);

		mock.verify();

		stub.restore();
	});

});
