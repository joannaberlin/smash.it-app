export default {
	async loadQuestions(context) {
		const response = await fetch(
			'https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=boolean'
		);
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(responseData.message || 'Failed to fetch!');
			throw error;
		}
		const randomNum = Math.floor(Math.random() * 10 + 1);
		const randomData = responseData.results[randomNum];
		console.log(randomData);
		const data = {
			question: randomData.question,
			answer: randomData.correct_answer,
		};
		console.log(data);
		context.commit('setRandomQuestion', data);
	},
};
