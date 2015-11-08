import { assert } from "chai"
import { Manager } from "../src/manager.js"

var sinon = require("sinon");

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

	it('loads config if provided', () => {
		var config1 = { rules: function () {} }
		var config2 = { rules: function () {} }

		var mock1 = sinon.mock(config1);
		mock1.expects("rules").once();

		var mock2 = sinon.mock(config2);
		mock2.expects("rules").once();

		var manager = new Manager();
		manager.addConfig(config1);
		manager.addConfig(config2);
		manager.get('experiment-1');

		mock1.verify();
		mock2.verify();
	});

})
