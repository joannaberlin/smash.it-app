import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
	namespaced: true,
	state() {
		return {
			question: {
				question: 'A bear does NOT defecate during hibernation.',
				answer: 'True',
			},
		};
	},
	mutations,
	actions,
	getters,
};
