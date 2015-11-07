import { assert } from "chai"
import { Feature } from "../src/feature.js"

describe("Feature", () => {

	it('can create', () => {

		var feature = new Feature;

		assert.instanceOf(feature, Feature);

	});

})
