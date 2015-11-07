import { assert } from "chai"
import { Bucketer } from "../src/bucketer.js"

var sinon = require("sinon");

describe("Bucketer", () => {

	it('can create', () => {
		var bucketer = new Bucketer;
		assert.instanceOf(bucketer, Bucketer);
	});

	it('requests if already bucketed from the session', () => {
		var session = { variant: function () {} };

		var experiment = 'experiment-1';
		var variant = 'control';

		var mock = sinon.mock(session);
		mock.expects("variant").withArgs(experiment).once().returns(variant);

		var bucketer = new Bucketer(experiment, session);
		assert.equal(bucketer.variant(), variant);

		mock.verify();
	});

});
