export default {
	addTodo(context, data) {
		const todo = {
			id: data.id,
			todo: data.todo,
			duration: data.duration,
		};

		context.commit('addTodo', {
			...todo,
		});
	},
	deleteTodo(context, id) {
		context.commit('deleteTodo', id);
	},
};
