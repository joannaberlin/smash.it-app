<template>
	<form @submit.prevent="submitForm">
		<div class="form-control">
			<label for="todo">Your Todo</label>
			<textarea id="todo" rows="3"></textarea>
		</div>
		<div class="form-control">
			<input
				type="radio"
				id="shortDuration"
				name="duration"
				value="< 30 mins"
			/>
			<label for="shortDuration">&lt; 30 mins</label>
		</div>
		<div class="form-control">
			<input
				type="radio"
				id="mediumDuration"
				name="duration"
				value="< 60 mins"
			/>
			<label for="mediumDuration">&lt; 60 mins</label>
		</div>
		<div class="form-control">
			<input
				type="radio"
				id="longDuration"
				name="duration"
				value="> 120 mins"
			/>
			<label for="longDuration">&gt; 120 mins</label>
		</div>
		<BaseButton mode="outline">Add Todo</BaseButton>
	</form>
</template>

<script>
export default {
	emits: ['save-data'],
	methods: {
		submitForm() {
			this.$emit('save-data');
		},
	},
};
</script>

<style scoped>
.form-control {
	margin: 1rem 0;
}

label {
	font-weight: bold;
	display: block;
	margin-bottom: 0.5rem;
}

input[type='radio'] + label {
	font-weight: normal;
	display: inline;
	margin: 0 0 0 0.5rem;
}

input,
textarea {
	display: block;
	width: 100%;
	border: 1px solid var(--color-text-light);
	border-radius: 10px;
	font: inherit;
}

input:focus,
textarea:focus {
	background-color: var(--color-text-light);
	outline: none;
	border-color: var(--color-action-second);
}

input[type='radio'] {
	display: inline;
	width: auto;
	border: none;
	cursor: pointer;
}

input[type='radio']:focus {
	accent-color: var(--color-action-second);
}

input[type='radio']:checked {
	accent-color: var(--color-action-second);
}
</style>
