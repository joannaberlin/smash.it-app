<template>
	<div class="header_wrapper">
		<h3>Good morning, <span class="name">Bruce</span>!</h3>
		<BaseButton>New Todo <span class="btn-icon">+</span></BaseButton>
	</div>
</template>

<style scoped>
.header_wrapper {
	display: flex;
	justify-content: space-between;
	margin: 1.2em 0;
}
.header_wrapper h3 {
	font-size: 0.9em;
	text-align: end;
	color: var(--color-text-medium);
	padding: 15px 0;
}

.name {
	font-weight: bold;
	color: var(--color-text-light);
}

.btn-icon {
	font-weight: bold;
	font-size: 1.5em;
	background: var(--color-action-second);
	padding: 3px 12px;
	border-radius: 50px;
}
</style>
