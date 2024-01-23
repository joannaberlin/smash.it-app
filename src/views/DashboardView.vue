<template>
	<TheHeader></TheHeader>
	<main class="container">
		<div class="item">
			<BaseCard>
				<h2>Today's weather in Berlin</h2>
				<div class="text-icon_wrapper">
					<div class="text_container">
						<p>{{ weatherData.temp }} °C</p>
						<h2>It feels like</h2>
						<p>{{ weatherData.feelTemp }} °C</p>
					</div>
					<img
						:src="
							'https://openweathermap.org/img/wn/' +
							`${weatherData.icon}` +
							'@2x.png'
						"
					/>
				</div>
			</BaseCard>
		</div>
		<div class="item">
			<BaseCard>
				<h2>Random animal fact checker to wake your brain up</h2>
			</BaseCard>
		</div>
		<div class="item">
			<BaseCard>
				<h2>Today's sky in Berlin</h2>
			</BaseCard>
		</div>
	</main>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader.vue';

export default {
	components: {
		TheHeader,
	},
	created() {
		this.loadWeatherData();
	},
	computed: {
		weatherData() {
			console.log(this.$store.getters['weather/data']);
			return this.$store.getters['weather/data'];
		},
	},
	methods: {
		async loadWeatherData() {
			try {
				await this.$store.dispatch('weather/loadWeatherData');
			} catch (error) {
				this.error = error.message || 'Something went wrong!';
			}
		},
	},
};
</script>

<style scoped>
.container {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.item h2 {
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
