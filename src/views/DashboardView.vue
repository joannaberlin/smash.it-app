<template>
	<TheHeader></TheHeader>
	<main class="container">
		<div class="item">
			<TemperatureWidget
				:temp="weatherData.temp"
				:feelTemp="weatherData.feelTemp"
				:icon="weatherData.icon"
			/>
		</div>
		<div class="item">
			<RandomQuestionWidget
				:question="questionData.question"
				:answer="questionData.answer"
			/>
		</div>
		<div class="item">
			<CloudsWidget
				:clouds="weatherData.clouds"
				:cloudsDesc="weatherData.cloudsDesc"
			/>
		</div>
	</main>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader.vue';
import TemperatureWidget from '@/components/weather/TemperatureWidget.vue';
import CloudsWidget from '@/components/weather/CloudsWidget.vue';
import RandomQuestionWidget from '@/components/questions/RandomQuestionWidget.vue';

export default {
	components: {
		TheHeader,
		TemperatureWidget,
		CloudsWidget,
		RandomQuestionWidget,
	},
	created() {
		this.loadWeatherData();
		this.loadQuestions();
	},
	computed: {
		weatherData() {
			console.log(this.$store.getters['weather/data']);
			return this.$store.getters['weather/data'];
		},
		questionData() {
			return this.$store.getters['questions/question'];
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
		async loadQuestions() {
			try {
				await this.$store.dispatch('questions/loadQuestions');
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
</style>
