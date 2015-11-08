import { assert } from "chai"
import { Config } from "../src/config.js"

describe("Config", () => {

	it('can create', () => {
		var config = new Config;
		assert.instanceOf(config, Config);
	});

	it('can set definition', () => {
		var definition = {
			"experiment-1": {
				"variants": [
					"control",
					"variant-1"
				]
			}
		};

		var config = new Config;
		config.setDefintion(definition);
		assert.equal(config._definition, definition);
	});

});
