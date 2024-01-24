<template>
	<div class="date_wrapper">
		<p>{{ currentDay }}</p>
		<p>{{ currentTime }}</p>
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
		currentTime() {
			const date = new Date().toLocaleString();
			for (let item of date) {
				if (item === ',') return date.slice(date.indexOf(item) + 1);
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
	}
}
</style>
