export class Manager {

	constructor() {
		this._config = [];
		this._loadedConfig = false;
		this._features = {};
	}

	addConfig(config) {
		this._config.push(config);
		this._loadedConfig = false;
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
		if (this._config.length !== 0 && !this._loadedConfig) {
			this._features = {};
			this._loadedConfig = true;
			for (var i = 0; i < this._config.length; i++) {
				var rules = this._config[i].rules();
				if (rules) {
					for (rule in rules) {
						this.set(rule, rules[rule]);
					}
				}
			}
		}
	}

}
