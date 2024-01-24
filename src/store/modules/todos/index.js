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
					type: 'longDuration',
				},
				{
					id: 't2',
					todo: 'Reply to emails',
					duration: '< 30 mins',
					type: 'shortDuration',
				},
				{
					id: 't2',
					todo: 'Read 30 pages of anything',
					duration: '< 60 mins',
					type: 'mediumDuration',
				},
				{
					id: 't2',
					todo: 'Do groceries',
					duration: '< 60 mins',
					type: 'mediumDuration',
				},
				{
					id: 't2',
					todo: 'Take a walk',
					duration: '> 120 mins',
					type: 'longDuration',
				},
			],
		};
	},
	mutations,
	actions,
	getters,
};
