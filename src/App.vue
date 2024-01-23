<template>
	<div id="container">
		<TheNavbar></TheNavbar>
		<router-view></router-view>
		<!-- <p>{{ weatherData.temp }}</p> -->
	</div>
</template>

<script>
import TheNavbar from './components/layout/TheNavbar.vue';

export default {
	components: {
		TheNavbar,
	},
	created() {
		this.loadWeatherData();
	},
	computed: {
		weatherData() {
			// console.log(this.$store.getters['weather/data']);
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
#container {
	padding: 1em;
}
</style>
