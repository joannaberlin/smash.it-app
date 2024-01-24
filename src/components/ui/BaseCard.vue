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
	margin: 0.5rem 0.2em;
	max-width: 30rem;
	background-color: var(--color-background-dark);
	height: 13em;
	display: flex;
	align-items: center;
	justify-items: center;
}
</style>
