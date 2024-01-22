<template>
	<div id="container">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	created() {
		this.loadWeatherData();
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
