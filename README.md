# Venice - Multivariate Test Bed [![Build Status](https://travis-ci.org/heldtogether/variants.svg)](https://travis-ci.org/heldtogether/variants)

A simple test bed for running multivariate tests. It only provides a way to query experiments and assigning users to a particular variant. You will need to use the manager throughout your code and manually provide the code for each of the variants.

### Installation

	npm install venice

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

```javascript
	var venice = require('venice');

	var definition = {
		"experiment-1": {
			"type": "variant",
			"variants": [
				"control",
				"variant-1"
			]
		}
	};

	var manager = venice.init(definition);

	...

	/** Alter the functionality for an experiment **/

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
```

The default `init` method will use cookies to persist the user's session. This makes it unsuitable for use in a CLI app. You can create your own session storage (e.g. in a database) and create an instance of the `manager`:

```javascript
	/** Create an instance of the manager **/

	var session = {
		variant: function() {
			// query the database
		},
		setVariant: function() {
			// write to database
		}
	};

	var factory = new venice.Factory(session);

	var config = new venice.Config(factory);
	config.setDefintion(definition);

	var manager = new venice.Manager();
	manager.addConfig(config);
```
