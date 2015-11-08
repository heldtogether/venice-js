import { assert } from "chai"
import { Config } from "../src/config.js"

describe("Config", () => {

	it('can create', () => {
		var config = new Config;
		assert.instanceOf(config, Config);
	});

});
