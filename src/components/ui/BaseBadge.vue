<template>
	<span class="badge" :badge="type">{{ text }}</span>
</template>

<script>
export default {
	props: ['type', 'duration'],
};
</script>

<style scoped></style>
