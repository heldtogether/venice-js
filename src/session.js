var Cookie = require('js-cookie');

export class Session {

	variant(experiment) {

		return Cookie.get(experiment);

	}

}
