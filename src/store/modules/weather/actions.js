export default {
	async loadWeatherData(context) {
		const apiKey = import.meta.env.VITE_API_KEY;
		console.log(apiKey);

		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=Berlin,de&units=metric&APPID=${apiKey}`
		);
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(responseData.message || 'Failed to fetch!');
			throw error;
		}
		console.log(responseData);
		const temperature = Math.floor(responseData.main.temp).toString();
		const data = { temp: temperature };
		console.log(data);
		context.commit('setWeatherInfo', data);
	},
};
