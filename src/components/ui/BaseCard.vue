<template>
	<div class="card">
		<slot></slot>
	</div>
</template>

<style scoped>
.card {
	border-radius: 10px;
	box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
	padding: 1rem;
	margin: 0.5rem auto;
	max-width: 30rem;
	background-color: var(--color-background-medium);
	height: 12em;
}
</style>
