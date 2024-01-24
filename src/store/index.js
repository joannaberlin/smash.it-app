import { createStore } from 'vuex';

import weatherModules from './modules/weather/index.js';
import questionsModules from './modules/questions/index.js';
import todosModules from './modules/todos/index';

const store = createStore({
	modules: {
		weather: weatherModules,
		questions: questionsModules,
		todos: todosModules,
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
