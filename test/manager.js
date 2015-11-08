import { assert } from "chai"
import { Manager } from "../src/manager.js"

describe("Manager", () => {

	it('can create', () => {
		var manager = new Manager;
		assert.instanceOf(manager, Manager);
	});

})
