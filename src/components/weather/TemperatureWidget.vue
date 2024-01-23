<template>
	<BaseCard>
		<h2>Today's weather in Berlin</h2>
		<div class="text-icon_wrapper">
			<div class="text_container">
				<p>{{ temp }} °C</p>
				<h2>It feels like</h2>
				<p>{{ feelTemp }} °C</p>
			</div>
			<img
				:src="'https://openweathermap.org/img/wn/' + `${icon}` + '@2x.png'"
			/>
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

.text-icon_wrapper {
	display: flex;
	justify-content: space-between;
}

.text-icon_wrapper img {
	max-width: 200px;
}

.text_container p:first-child {
	font-size: 2em;
	font-weight: bold;
}

.text_container p:nth-child(3) {
	font-size: 1.5em;
}
</style>
