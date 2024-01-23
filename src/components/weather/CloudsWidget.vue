<template>
	<BaseCard>
		<h2>Today's sky in Berlin</h2>
		<div class="text_wrapper">
			<h3>
				<mark>{{ cloudsDesc }}</mark>
			</h3>
			<p>
				<span>{{ clouds }}%</span> Cloudy
			</p>
		</div>
	</BaseCard>
</template>

<script>
export default {
	props: ['clouds', 'cloudsDesc'],
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
</style>
