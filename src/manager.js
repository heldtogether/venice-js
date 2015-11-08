export class Manager {

	constructor() {
		this._features = {};
	}

	get(name) {
		return this._features[name];
	}

	set(name, feature) {
		this._features[name] = feature;
	}

}
