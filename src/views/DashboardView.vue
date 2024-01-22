<template>
	<TheHeader></TheHeader>
	<main class="container">
		<div class="item">
			<BaseCard>
				<h2>Today's weather in Berlin</h2>
			</BaseCard>
		</div>
		<div class="item">
			<BaseCard>
				<h2>Random animal fact checker to wake your brain up</h2>
			</BaseCard>
		</div>
		<div class="item">
			<BaseCard>
				<h2>Today's sky in Berlin</h2>
			</BaseCard>
		</div>
	</main>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader.vue';

export default {
	components: {
		TheHeader,
	},
};
</script>

<style scoped>
.container {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.item h2 {
	font-size: 0.9em;
}
</style>
