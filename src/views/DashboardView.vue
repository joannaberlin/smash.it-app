<template>
	<TheHeader></TheHeader>
	<BaseCardDesktop>
		<main id="container">
			<div class="item">
				<TemperatureWidget
					:temp="weatherData.temp"
					:feelTemp="weatherData.feelTemp"
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
					:icon="weatherData.icon"
				/>
			</div>
			<div class="item item-4"><TodosList></TodosList></div>
		</main>
	</BaseCardDesktop>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader.vue';
import TemperatureWidget from '@/components/weather/TemperatureWidget.vue';
import CloudsWidget from '@/components/weather/CloudsWidget.vue';
import RandomQuestionWidget from '@/components/questions/RandomQuestionWidget.vue';
import TodosList from '@/components/todos/TodosList.vue';

export default {
	components: {
		TheHeader,
		TemperatureWidget,
		CloudsWidget,
		RandomQuestionWidget,
		TodosList,
	},
	created() {
		this.loadWeatherData();
		this.loadQuestions();
	},
	computed: {
		weatherData() {
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
#container {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

@media (min-width: 720px) {
	.item-4 {
		grid-column-start: 2;
		grid-column-end: 2;
		grid-row-start: 2;
		grid-row-end: 3;
		min-height: auto;
	}
}
</style>
