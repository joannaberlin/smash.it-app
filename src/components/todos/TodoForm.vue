<template>
	<form @submit.prevent="submitForm">
		<div class="form-control">
			<label for="todo">Your Todo</label>
			<textarea id="todo" rows="3"></textarea>
		</div>
		<div class="form-control">
			<input type="checkbox" id="shortDuration" value="< 30 mins" />
			<label for="shortDuration">&lt; 30 mins</label>
		</div>
		<div class="form-control">
			<input type="checkbox" id="mediumDuration" value="< 60 mins" />
			<label for="mediumDuration">&lt; 60 mins</label>
		</div>
		<div class="form-control">
			<input type="checkbox" id="longDuration" value="> 120 mins" />
			<label for="longDuration">&#60; 120 mins</label>
		</div>
		<BaseButton>Add Todo</BaseButton>
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
