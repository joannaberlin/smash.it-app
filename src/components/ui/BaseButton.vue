<template>
	<button :class="mode">
		<slot></slot>
	</button>
</template>

<script>
export default {
	props: {
		mode: {
			type: String,
			required: false,
			default: null,
		},
	},
};
</script>

<style scoped>
button {
	text-decoration: none;
	padding: 0.1rem 0.5rem;
	font: inherit;
	font-weight: bold;
	background-color: var(--color-action-first);
	border: 2px solid var(--color-action-first);
	color: var(--color-background-dark);
	cursor: pointer;
	border-radius: 30px;
	margin-right: 0.5rem;
	display: inline-block;
	min-width: 70px;
}

button:hover,
button:active {
	opacity: 90%;
}

.outline {
	border: 2px solid var(--color-action-second);
}

.transparent {
	background-color: transparent;
	border: none;
}
</style>
