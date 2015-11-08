import { assert } from "chai"
import { Session } from "../src/session.js"

var Cookie = require('js-cookie');
var sinon = require("sinon");

describe("Session", () => {

	it('can create', () => {
		var session = new Session;
		assert.instanceOf(session, Session);
	});

	it('reads the saved variant from a cookie', () => {
		var stub = sinon.stub(Cookie, 'get');
		stub.returns(undefined);

		var session = new Session;
		assert.isUndefined(session.variant('experiment-1'));

		stub.restore();
	});

})
