<template>
	<TheHeader></TheHeader>
	<main class="container">
		<BaseCard>
			<p>Today's weather in Berlin</p>
		</BaseCard>
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

<style scoped></style>
