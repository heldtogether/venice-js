export class Feature {

	constructor(bucketer) {
		this.bucketer = bucketer;
	}

	active() {
		return true;
	}

	variant() {
		return this.bucketer.variant();
	}

}
