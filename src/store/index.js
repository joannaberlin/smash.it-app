import { createStore } from 'vuex';

import weatherModules from './modules/weather/index.js';

const store = createStore({
	modules: {
		weather: weatherModules,
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
