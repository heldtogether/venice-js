import { assert } from "chai"
import { Config } from "../src/config.js"

var sinon = require("sinon");

var definition = {
	"experiment-1": {
		"type": "variant",
		"variants": [
			"control",
			"variant-1"
		]
	}
};

describe("Config", () => {

	it('can create', () => {
		var config = new Config;
		assert.instanceOf(config, Config);
	});

	it('can set definition', () => {
		var config = new Config;
		config.setDefintion(definition);
		assert.equal(config._definition, definition);
	});

});
