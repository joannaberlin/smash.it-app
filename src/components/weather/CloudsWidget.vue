<template>
	<BaseCard>
		<div>
			<h2>Today's sky in Berlin</h2>
			<div class="text-icon_wrapper">
				<div class="text_wrapper">
					<h3>
						<mark>{{ cloudsDesc }}</mark>
					</h3>
					<p>
						<span>{{ clouds }}%</span> Clouds
					</p>
				</div>
				<div class="icon_wrapper">
					<i
						v-if="noCloudy"
						class="em em-sunglasses"
						aria-role="presentation"
						aria-label="face with sunglasses"
					></i>
					<i
						v-else-if="littleCloudy"
						class="em em-smirk"
						aria-role="presentation"
						aria-label="smirk face"
					></i>
					<i
						v-else-if="cloudy"
						class="em em-face_with_rolling_eyes"
						aria-role="presentation"
						aria-label="face with rolling eyes"
					></i>
					<i
						v-else
						class="em em-woozy_face"
						aria-role="presentation"
						aria-label="woozy face"
					></i>
				</div>
				<img
					:src="'https://openweathermap.org/img/wn/' + `${icon}` + '@2x.png'"
				/>
			</div>
		</div>
	</BaseCard>
</template>

<script>
export default {
	props: ['clouds', 'cloudsDesc', 'icon'],
	computed: {
		noCloudy() {
			if (this.clouds >= 0 && this.clouds <= 20) {
				return true;
			}
		},
		littleCloudy() {
			if (this.clouds > 20 && this.clouds < 51) {
				return true;
			}
		},
		cloudy() {
			if (this.clouds > 50 && this.clouds < 81) {
				return true;
			}
		},
	},
};
</script>

<style scoped>
h2 {
	font-size: 0.9em;
}

h3 {
	text-transform: capitalize;
	margin-top: 1em;
}

h3 mark {
	background-color: var(--color-text-medium);
	color: var(--color-background-medium);
	font-weight: bold;
	font-size: 0.9em;
}

.text_wrapper p span {
	padding-right: 0.3em;
	font-size: 2em;
	font-weight: bold;
}

.text_wrapper p:nth-child(2) {
	font-size: 0.9em;
}

.text-icon_wrapper {
	display: flex;
	align-items: flex-start;
}

.text-icon_wrapper img {
	max-width: 130px;
	object-fit: cover;
	margin-left: 1.8em;
}

i {
	margin: 4em 0 0 1.1em;
}
</style>
