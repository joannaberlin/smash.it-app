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
		const questionsAndAnswers = responseData.results.map((item) => {
			return { question: item.question, answer: item.correct_answer };
		});
		const cleanedData = questionsAndAnswers.map((item) => {
			return {
				question: item.question
					.split(' ')
					.map((word) => {
						if (word.includes('&')) {
							return word.slice(0, word.indexOf('&')) + "'s";
						}
						return word;
					})
					.join(' '),
				answer: item.answer,
			};
		});
		const randomNum = Math.floor(Math.random() * 9 + 1);
		const randomData = cleanedData[randomNum];

		const data = {
			question: randomData.question,
			answer: randomData.answer,
		};
		context.commit('setRandomQuestion', data);
	},
};
