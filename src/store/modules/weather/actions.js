export default {
	async loadWeatherData(context) {
		const response = await fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=Berlin,de&units=metric&APPID=27c0374f238a83586d514aa1dd3b7c6e'
		);
		console.log(response);
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(responseData.message || 'Failed to fetch!');
			throw error;
		}
		console.log(responseData);
		context.commit('setWeatherInfo', responseData);
	},
};
