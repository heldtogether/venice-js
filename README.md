# Variants [![Build Status](https://travis-ci.org/heldtogether/variants.svg)](https://travis-ci.org/heldtogether/variants)

A simple test bed for running multivariate tests. It only provides a way to query experiments and assigning users to a particular variant. You will need to use the manager throughout your code and manually provide the code for each of the variants.

## Config

	{
		"experiment-1": {
			"type": "variant",
			"variants": [
				"control",
				"variant-1"
			]
		}
	}


## Usage

	var variants = require('variants');

	var definition = {
		"experiment-1": {
			"type": "variant",
			"variants": [
				"control",
				"variant-1"
			]
		}
	};

	// Create the Variants manager
	var session = new variants.Session();

	var factory = new variants.Factory(session);

	var config = new variants.Config(factory);
	config.setDefintion(definition);

	var manager = new variants.Manager();
	manager.addConfig(config);

	...

	// Use the Variants manager to alter the display
	// for the user.
	var experiment = manager.get('experiment-1');
	if (experiment && experiment.active()) {

		switch (experiment.variant()) {

			case 'control':
				console.log('control');
				break;

			case 'variant-1':
				console.log('variant-1');
				break;

		}

	}
