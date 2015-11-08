import { assert } from "chai"
import { Factory } from "../src/factory.js"

describe("Factory", () => {

	it('can create', () => {
		var factory = new Factory;
		assert.instanceOf(factory, Factory);
	});

});
