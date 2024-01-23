export default {
	async loadWeatherData(context) {
		const apiKey = import.meta.env.VITE_API_KEY;

		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=Berlin,de&units=metric&APPID=${apiKey}`
		);
		const responseData = await response.json();
		if (!response.ok) {
			const error = new Error(responseData.message || 'Failed to fetch!');
			throw error;
		}
		console.log(responseData);
		const temperature = responseData.main.temp.toFixed();
		const iconSrc = responseData.weather[0].icon;
		const feelTemp = responseData.main.feels_like.toFixed();
		const clouds = responseData.clouds.all;
		const cloudsDesc = responseData.weather[0].description;
		console.log(cloudsDesc);
		const data = {
			temp: temperature,
			icon: iconSrc,
			feelTemp: feelTemp,
			clouds: clouds,
			cloudsDesc: cloudsDesc,
		};
		console.log(data);
		context.commit('setWeatherInfo', data);
	},
};
