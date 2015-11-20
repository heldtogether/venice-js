var Cookie = require('js-cookie');

export class Session {

	variant(experiment) {
		return Cookie.get(experiment);
	}

	setVariant(experiment, variant) {
		Cookie.set(experiment, variant, { expires: 365 });
	}

}
