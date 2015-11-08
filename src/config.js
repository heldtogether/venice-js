export class Config {

	constructor(factory) {
		this._definition = {};
		this.factory = factory;
	}

	setDefintion(definition) {
		this._definition = definition;
	}

	rules() {
		var rules = {};
		for (var feature in this._definition) {
			rules[feature] = this.factory.create(this._definition[feature]);
		}
		return rules;
	}

}
