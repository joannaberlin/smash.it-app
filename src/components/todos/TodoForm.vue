<template>
	<form @submit.prevent="submitForm">
		<div class="form-control">
			<label for="todo">Your Todo</label>
			<textarea id="todo" rows="3" v-model.trim="todo.val"></textarea>
		</div>
		<div class="form-control">
			<input
				type="radio"
				id="shortDuration"
				name="duration"
				value="short"
				v-model.trim="duration.val"
			/>
			<label for="shortDuration">&lt; 30 mins</label>
		</div>
		<div class="form-control">
			<input
				type="radio"
				id="mediumDuration"
				name="duration"
				value="medium"
				v-model.trim="duration.val"
			/>
			<label for="mediumDuration">&lt; 60 mins</label>
		</div>
		<div class="form-control">
			<input
				type="radio"
				id="longDuration"
				name="duration"
				value="long"
				v-model.trim="duration.val"
			/>
			<label for="longDuration">&gt; 120 mins</label>
		</div>
		<BaseButton mode="outline">Add Todo</BaseButton>
		<Transition name="text"
			><p v-if="isAdded">Your todo was added to the list!</p></Transition
		>
	</form>
</template>

<script>
export default {
	emits: ['save-data'],
	data() {
		return {
			todo: {
				val: '',
			},
			duration: {
				val: '',
			},
			type: {
				val: '',
			},
			isAdded: false,
		};
	},
	methods: {
		submitForm() {
			const formData = {
				id: Math.floor(Math.random() * 100),
				todo: this.todo.val,
				duration: this.duration.val,
				type: this.duration.val,
			};
			this.$emit('save-data', formData);
			this.isAdded = true;
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

p {
	margin-top: 1em;
	text-align: center;
}

.text-enter-active {
	animation: bounce-in 0.5s;
}
.text-leave-active {
	animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
	0% {
		transform: scale(0);
	}
	50% {
		transform: scale(1.25);
	}
	100% {
		transform: scale(1);
	}
}
</style>
