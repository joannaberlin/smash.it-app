<template>
	<div class="todos_wrapper">
		<div class="text_wrapper">
			<h2><mark>Your ToDos</mark></h2>
			<ul>
				<TodoItem
					v-for="todo in todos"
					:key="todo.id"
					:id="todo.id"
					:todo="todo.todo"
				></TodoItem>
			</ul>
		</div>
	</div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
	components: {
		TodoItem,
	},
	computed: {
		todos() {
			return this.$store.getters['todos/todos'];
		},
	},
};
</script>

<style scoped>
.todos_wrapper {
	border-radius: 10px;
	box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
	padding: 1rem;
	margin: 0.5rem 0.2em;
	max-width: 30rem;
	background-color: var(--color-background-dark);
	min-height: 26em;
	display: flex;
	align-items: flex-start;
	justify-items: center;
}

h2 mark {
	background: var(--color-text-light);
	font-weight: bold;
}

ul {
	list-style: none;
	margin: 0;
	padding: 0;
}
</style>
