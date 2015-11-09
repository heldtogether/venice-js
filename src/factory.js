import { Bucketer } from './bucketer.js'
import { Feature } from './feature.js'

export class Factory {

	constructor(session) {
		this.session = session;
	}

	create(experiment, definition) {
		var variants = definition['variants'];
		var bucketer = new Bucketer(experiment, variants, this.session);

		var feature = new Feature(bucketer);
		return feature;
	}

}
