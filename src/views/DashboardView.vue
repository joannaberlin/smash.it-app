<template>
	<TheHeader></TheHeader>
	<h3>Dashboard Page</h3>
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
h3 {
	color: var(--color-text-medium);
}
</style>
