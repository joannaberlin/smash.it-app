<template>
	<span class="badge" :class="type">{{ text }}</span>
</template>

<script>
export default {
	props: ['text', 'type'],
};
</script>

<style scoped>
.badge {
	color: var(--color-background-dark);
	border-radius: 30px;
	padding: 0.2em 0.8em;
	display: inline-block;
	margin-right: 0.5rem;
	font-size: 0.9em;
	font-weight: bold;
}

.shortDuration {
	background-color: var(--color-badge-1);
	border: 1px solid var(--color-badge-1);
}

.mediumDuration {
	background-color: var(--color-badge-2);
	border: 1px solid var(--color-badge-2);
}

.longDuration {
	background-color: var(--color-badge-3);
	border: 1px solid var(--color-badge-3);
}
</style>
