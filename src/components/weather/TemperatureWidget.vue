<template>
	<BaseCard>
		<div>
			<h2>Today's weather in Berlin</h2>

			<div class="text_container">
				<p>{{ temp }} °C</p>
				<h3><mark>It feels like</mark></h3>
				<p>{{ feelTemp }} °C</p>
			</div>
		</div>
	</BaseCard>
</template>

<script>
export default {
	props: ['temp', 'feelTemp'],
};
</script>

<style scoped>
h2 {
	font-size: 0.9em;
}

h3 mark {
	font-size: 0.9em;
	background-color: var(--color-text-medium);
	color: var(--color-background-medium);
	font-weight: bold;
}

.text_container p:first-child {
	font-size: 2em;
	font-weight: bold;
	margin-top: 0.5em;
}

.text_container p:nth-child(3) {
	font-size: 1.5em;
}
</style>
