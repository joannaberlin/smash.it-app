import { createStore } from 'vuex';

import weatherModules from './modules/weather/index.js';
import questionsModules from './modules/questions/index.js';

const store = createStore({
	modules: {
		weather: weatherModules,
		questions: questionsModules,
	},
	state() {
		return {
			userName: 'Bruce',
		};
	},
	getters: {
		userName(state) {
			return state.userName;
		},
	},
});

export default store;
