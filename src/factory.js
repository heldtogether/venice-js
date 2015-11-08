import { Bucketer } from "../src/bucketer.js"
import { Feature } from "../src/feature.js"
import { Session } from "../src/session.js"

export class Factory {

	create(experiment, definition) {
		var session = new Session;

		var variants = definition['variants'];
		var bucketer = new Bucketer(experiment, variants, session);

		var feature = new Feature(bucketer);
		return feature;
	}

}
