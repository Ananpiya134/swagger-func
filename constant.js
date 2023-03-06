const blankInput = {
	method: '',
	path: '', // eg.path: /balances
	tags: '',
	description: '',
	parameters: [['name', 'in', 'description', 'type', 'required']],
	requestBody: {
		description: '',
		ref: '#/definitions',
	},
	responses: {
		description: '',
		ref: '#/definitions/response',
		example: {},
	},
};

const data = {
	method: 'get',
	path: '/managers/{id}/details', // eg.path: /balances
	tags: 'Business Manager',
	description: 'Get Business Manager by ID',
	requestBody: {
		description: 'Get Business manger request body',
		ref: '#/definitions/get_business_manager_by_id',
	},
	parameters: [['id', 'path', 'The selected id to be deleted', 'number', true]],
	responses: {
		description: 'Successfully fetch data',
		ref: '#/definitions/response',
	},
};

module.exports = { data };
