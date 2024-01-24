<template>
	<BaseCard>
		<div class="container">
			<h2>Random animal fact checker to wake your brain up</h2>
			<p>
				<mark>{{ question }}</mark>
			</p>
			<BaseButton @click="checkAnswer()" mode="outline">
				<p v-if="!isAnswered">?</p>
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
	margin-bottom: 1em;
}

.container p:nth-child(2) mark {
	font-size: 0.9em;
	font-weight: bold;
	background-color: var(--color-text-light);
}

button {
	margin-top: 1em;
}

button p {
	font-size: 1.2em;
	font-weight: bold;
}
</style>
