<template>
	<li>
		<p><span>+</span>{{ todo }}</p>
		<BaseBadge :duration="duration" :text="text"></BaseBadge>
		<BaseButton @click="handleDelete" mode="transparent"
			><i class="em em-wastebasket" aria-role="presentation" aria-label=""></i
		></BaseButton>
	</li>
</template>

<script>
export default {
	props: ['id', 'todo', 'duration', 'text'],
	methods: {
		handleDelete() {
			const id = this.id;
			this.$store.dispatch('todos/deleteTodo', id);
		},
	},
};
</script>

<style scoped>
li {
	margin-top: 1.1em;
	font-size: 0.9em;
}

li p {
	margin-bottom: 1em;
}

li span {
	background: var(--color-text-light);
	color: var(--color-background-dark);
	font-weight: bold;
	font-size: 1.2em;
	padding: 0 6px;
	border: 1px solid var(--color-text-medium);
	border-radius: 30px;
	margin-right: 1em;
}
</style>
