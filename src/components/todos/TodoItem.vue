<template>
	<li>
		<p><span>+</span>{{ todo }}</p>
		<BaseBadge :type="type" :text="text"></BaseBadge>
	</li>
</template>

<script>
export default {
	props: ['id', 'todo', 'type', 'text'],
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
