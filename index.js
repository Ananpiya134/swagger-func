const fs = require('fs');
const data = require('./constant');

const createSwagger = (payload) => {
	const {
		method,
		path,
		tags,
		description,
		parameters,
		requestBody,
		responses,
	} = payload;

	// console.log(payload);

	const reformatedSwagger = {
		[path]: {
			[method]: {
				tags: [tags],
				summary: description,
				description,
				consumes: ['application/json'],
				produces: ['application/json', 'application/xml'],
				parameters: parameters.map((item) => ({
					name: item[0],
					in: item[1],
					description: item[2],
					type: item[3],
					required: item[4],
				})),
				requestBody: requestBody?.description
					? {
							description: requestBody.description,
							content: {
								'application/json': {
									schema: {
										type: 'object',
										$ref: requestBody.ref,
									},
								},
							},
					  }
					: {},
				responses: {
					[method === 'post' ? 201 : 200]: {
						description: responses.description,
						content: {
							['application/json']: {
								schema: {
									type: 'object',
									$ref: responses.ref,
									example: responses.example,
								},
							},
						},
					},
				},
			},
		},
	};

	fs.writeFile(
		'store.json',
		JSON.stringify(reformatedSwagger),
		{ endcoding: 'utf-8' },
		(err) => {
			if (err) {
				console.log(err);
			}
		},
	);
};

createSwagger(data.data);
