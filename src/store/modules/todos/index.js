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
					duration: 'long',
				},
				{
					id: 't2',
					todo: 'Reply to emails',
					duration: 'quick',
				},
				{
					id: 't3',
					todo: 'Read 30 pages of anything',
					duration: 'medium',
				},
				{
					id: 't4',
					todo: 'Do groceries',
					duration: 'medium',
				},
				{
					id: 't5',
					todo: 'Take a walk',
					duration: 'long',
				},
			],
		};
	},
	mutations,
	actions,
	getters,
};
