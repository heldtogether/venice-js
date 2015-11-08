import { assert } from "chai"
import { Manager } from "../src/manager.js"

describe("Manager", () => {

	it('can create', () => {
		var manager = new Manager;
		assert.instanceOf(manager, Manager);
	});

	it('can get feature', () => {
		var manager = new Manager;
		assert.equal(manager.get('experiment-1'), undefined);
	});

	it('can set feature', () => {
		var experiment = 'experiment-1';

		var feature = {};

		var manager = new Manager;
		manager.set(experiment, feature)

		assert.equal(manager.get(experiment), feature);
	});

})
