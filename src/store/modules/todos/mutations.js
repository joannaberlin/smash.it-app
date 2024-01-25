export default {
	addTodo(state, payload) {
		state.todos.push(payload);
	},
	deleteTodo(state, id) {
		state.todos = state.todos.filter((todo) => todo.id !== id);
	},
};
