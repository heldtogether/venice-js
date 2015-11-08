import { assert } from 'chai'
import { Session } from '../src/session.js'

var Cookie = require('js-cookie');
var sinon = require('sinon');

describe('Session', () => {

	it('can create', () => {
		var session = new Session;
		assert.instanceOf(session, Session);
	});

	it('reads the saved variant from a cookie', () => {
		var mock = sinon.mock(Cookie);
		mock.expects('get').once().returns(undefined);

		var session = new Session;
		assert.isUndefined(session.variant('experiment-1'));

		mock.verify();
	});

	it('saves the variant to a cookie', () => {
		var experiment = 'experiment-1';
		var variant = 'variant-1';

		var mock = sinon.mock(Cookie);
		mock.expects('set').once().withArgs(experiment, variant);

		var session = new Session;
		session.setVariant(experiment, variant);

		mock.verify();
	});

})
