export class Bucketer {

	constructor(experiment, variants, session) {
		this.experiment = experiment;
		this.variants = variants;
		this.session = session;
	}

	variant() {
		var variant = this.session.variant(this.experiment);

		if (!variant) {
			var limit = 1/this.variants.length;
			var random = Math.random();
			var index = Math.floor(((random * 10) - 0.1) / (limit * 10));
			variant = this.variants[index];
		}

		return variant;
	}

}
