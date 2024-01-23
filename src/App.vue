<template>
	<div id="container">
		<div id="nav_container"><TheNavbar></TheNavbar></div>
		<div id="views_container"><router-view></router-view></div>
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

#nav_container {
	z-index: 1;
}

#views_container {
	z-index: 10;
}

@media (min-width: 1200px) {
	#container {
		display: flex;
		flex-direction: row;
		justify-content: right;
	}
}
</style>
