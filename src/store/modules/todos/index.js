import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
	namespaced: true,
	state() {
		return {
			todos: [
				{
					id: 't1',
					todo: 'Solve very difficult JS algorithm',
					duration: '> 120 mins',
				},
				{ id: 't2', todo: 'Reply to emails', duration: '< 30 mins' },
				{ id: 't2', todo: 'Read 30 pages of anything', duration: '< 60 mins' },
				{ id: 't2', todo: 'Do groceries', duration: '< 60 mins' },
				{ id: 't2', todo: 'Take a walk', duration: '< 60 mins' },
			],
		};
	},
	mutations,
	actions,
	getters,
};
