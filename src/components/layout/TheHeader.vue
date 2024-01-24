<template>
	<div class="header_wrapper">
		<h3>Good morning, <span class="name">Bruce</span>!</h3>
		<div class="date-btn_wrapper">
			<BaseCurrentDate></BaseCurrentDate>
			<BaseButton>New Todo <span class="btn-icon">+</span></BaseButton>
		</div>
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

@media (min-width: 1200px) {
	.header_wrapper {
		background-color: var(--color-background-medium);
		box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
		padding: 1.2em 2.5em;
		margin: 1em 3em;
		border-radius: 30px;
	}

	.date-btn_wrapper {
		display: flex;
	}
}
</style>
