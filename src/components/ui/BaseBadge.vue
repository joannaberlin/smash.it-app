<template>
	<span class="badge" :badge="type">{{ text }}</span>
</template>

<script>
export default {
	props: ['type', 'duration'],
};
</script>

<style scoped>
.badge {
	color: var(--color-background-dark);
	border-radius: 30px;
	padding: 0.5rem 1.5rem;
	display: inline-block;
	margin-right: 0.5rem;
}

.shortDuration {
	background-color: var(--color-badge-1);
}

.mediumDuration {
	background-color: var(--color-badge-2);
}

.longDuration {
	background-color: var(--color-badge-3);
}
</style>
