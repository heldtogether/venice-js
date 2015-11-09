export class Config {

	constructor(factory) {
		this.definition = {};
		this.factory = factory;
	}

	setDefintion(definition) {
		this.definition = definition;
	}

	rules() {
		var rules = {};
		for (var feature in this.definition) {
			rules[feature] = this.factory.create(
				feature,
				this.definition[feature]
			);
		}
		return rules;
	}

}
