export class Manager {

	constructor(config) {
		this.config = [];
		this.loadedConfig = false;
		this._features = {};
	}

	addConfig(config) {
		this.config.push(config);
		this.loadedConfig = false;
	}

	get(name) {
		this._loadConfig();
		return this._features[name];
	}

	set(name, feature) {
		this._loadConfig();
		this._features[name] = feature;
	}

	_loadConfig() {
		if (this.config.length !== 0 && !this.loadedConfig) {
			this._features = {};
			this.loadedConfig = true;
			for (var i = 0; i < this.config.length; i++) {
				var rules = this.config[i].rules();
				if (rules) {
					for (rule in rules) {
						this.set(rule, rules[rule]);
					}
				}
			}
		}
	}

}
