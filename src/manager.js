export class Manager {

	constructor() {
		this.config = [];
		this.loadedConfig = false;
		this.features = {};
	}

	addConfig(config) {
		this.config.push(config);
		this.loadedConfig = false;
	}

	get(name) {
		this.loadConfig();
		return this.features[name];
	}

	set(name, feature) {
		this.loadConfig();
		this.features[name] = feature;
	}

	loadConfig() {
		if (this.config.length !== 0 && !this.loadedConfig) {
			this.features = {};
			this.loadedConfig = true;
			for (var i = 0; i < this.config.length; i++) {
				var rules = this.config[i].rules();
				if (rules) {
					for (var rule in rules) {
						this.set(rule, rules[rule]);
					}
				}
			}
		}
	}

}
