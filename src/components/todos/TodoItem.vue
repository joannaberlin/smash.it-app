<template>
	<li>
		<p>{{ todo }}</p>
		<!-- <div>
			<p>Base Badge</p>
		</div> -->
	</li>
</template>

<script>
export default {
	props: ['id', 'todo', 'duration'],
};
</script>

<style scoped></style>
