<template>
	<TheHeader></TheHeader>
	<BaseButton>New Todo <span class="btn-icon">+</span></BaseButton>
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

.btn-icon {
	font-weight: bold;
	font-size: 1.5em;
	background: var(--color-action-second);
	padding: 3px 12px;
	border-radius: 50px;
}
</style>
