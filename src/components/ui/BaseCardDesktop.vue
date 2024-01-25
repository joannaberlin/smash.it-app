<template>
	<div class="card">
		<slot></slot>
	</div>
</template>

<style scoped>
@media (min-width: 1200px) {
	.card {
		width: 85vw;
		min-height: 80vh;
		min-height: 100vh;
		border-radius: 30px;
		padding: 0.6em;
		box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
		background: var(--color-background-dark);
	}
}
</style>
