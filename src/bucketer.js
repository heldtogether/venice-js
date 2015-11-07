export class Bucketer {

	constructor(experiment, session) {
		this.experiment = experiment;
		this.session = session;
	}

	variant() {
		var variant = this.session.variant(this.experiment);
		return variant;
	}

}
