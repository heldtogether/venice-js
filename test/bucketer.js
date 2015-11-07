import { assert } from "chai"
import { Bucketer } from "../src/bucketer.js"

var sinon = require("sinon");

describe("Bucketer", () => {

	it('can create', () => {
		var bucketer = new Bucketer;
		assert.instanceOf(bucketer, Bucketer);
	});

});
