import { assert } from "chai"
import { Session } from "../src/session.js"

var sinon = require("sinon");

describe("Session", () => {

	it('can create', () => {
		var session = new Session;
		assert.instanceOf(session, Session);
	});

})
