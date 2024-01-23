<template>
	<BaseCard>
		<div>
			<h2>Today's weather in Berlin</h2>
			<div class="text-icon_wrapper">
				<div class="text_container">
					<p>{{ temp }} °C</p>
					<h3><mark>It feels like</mark></h3>
					<p>{{ feelTemp }} °C</p>
				</div>
				<img
					:src="'https://openweathermap.org/img/wn/' + `${icon}` + '@2x.png'"
				/>
			</div>
		</div>
	</BaseCard>
</template>

<script>
export default {
	props: ['temp', 'feelTemp', 'icon'],
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

.text-icon_wrapper {
	display: flex;
	justify-content: space-between;
}

.text-icon_wrapper img {
	max-width: 100px;
	object-fit: cover;
	margin-left: 1em;
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
