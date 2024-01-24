<template>
	<div class="date_wrapper">
		<p>{{ currentDay }}</p>
	</div>
</template>

<script>
export default {
	computed: {
		currentDay() {
			const date = new Date().toLocaleString();
			for (let item of date) {
				if (item === ',') return date.slice(0, date.indexOf(item));
			}
		},
	},
};
</script>

<style scoped>
.date_wrapper {
	display: none;
}

@media (min-width: 1200px) {
	.date_wrapper {
		display: flex;
		align-items: center;
	}

	.date_wrapper p {
		color: var(--color-text-medium);
		font-size: 0.9em;
		margin-right: 2em;
	}
}
</style>
