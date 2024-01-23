<template>
	<BaseCard>
		<div>
			<h2>Random animal fact checker to wake your brain up</h2>
			<p>{{ question }}</p>
			<BaseButton @click="checkAnswer()" mode="outline"
				><p v-if="!isAnswered">?</p>
				<p v-else-if="isAnswered">{{ answer }}</p></BaseButton
			>
		</div>
	</BaseCard>
</template>

<script>
export default {
	props: ['question', 'answer'],
	data() {
		return {
			isAnswered: false,
		};
	},
	methods: {
		checkAnswer() {
			this.isAnswered = !this.isAnswered;
		},
	},
};
</script>

<style scoped>
h2 {
	font-size: 0.9em;
}

button {
	margin-top: 1em;
}

button p {
	font-size: 1.2em;
	font-weight: bold;
}
</style>
