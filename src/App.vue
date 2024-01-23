<template>
	<div id="container">
		<TheNavbar></TheNavbar>
		<router-view></router-view>
	</div>
</template>

<script>
import TheNavbar from './components/layout/TheNavbar.vue';

export default {
	components: {
		TheNavbar,
	},
};
</script>

<style scoped>
#container {
	padding: 1em;
}
</style>
