const example = {
	method: 'get',
	path: '/balances', // eg.path: /balances
	tags: 'tags',
	description: 'something',
	parameters: [['name', 'in', 'description', 'type', 'required']],
	requestBody: {
		description: '',
		ref: '#/definitions/...',
	},
	responses: {
		description: 'something',
		ref: '#/definitions/...',

		example: {},
	},
};

const parameters = [
	['user_id', 'query', 'User id to be fetch', 'number', false],
	['limit', 'query', 'number of item per fetch', 'number', false],
	['page', 'query', 'number of page', 'number', false],
	['status', 'query', 'The transaction logs status', 'string', false],
	['sortBy', 'query', 'The column name for sorting', 'string', false],
	[
		'sortOrder',
		'query',
		'The order on sorting whether ascending or decending',
		'string',
		false,
	],
	[
		'from',
		'query',
		'The type of wallet that made transaction',
		'string',
		false,
	],
	[
		'to',
		'query',
		'The type of wallet that receive transaction',
		'string',
		false,
	],
	['fromCampaign', 'query', 'The id that make transaction', 'number', false],
	['toCampaign', 'query', 'the id that receive transaction', 'number', false],
];
