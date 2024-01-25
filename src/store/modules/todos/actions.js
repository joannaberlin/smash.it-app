export default {
	addTodo(context, data) {
		const todo = {
			id: data.id,
			todo: data.todo,
			duration: data.duration,
			type: data.type,
		};

		context.commit('addTodo', {
			...todo,
		});
	},
	removeTodo() {},
};
