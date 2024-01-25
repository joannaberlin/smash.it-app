<template>
	<nav>
		<div class="logo_wrapper">
			<router-link to="/"
				><img
					src="../../assets/logo_icon.png"
					alt="logo image bomb icon"
					class="icon"
			/></router-link>
			<router-link to="/">smash.it</router-link>
		</div>
		<ul>
			<li><router-link to="/">Home</router-link></li>
			<li><router-link to="/dashboard">Dashboard</router-link></li>
			<li><router-link to="/goals">Goals</router-link></li>
		</ul>
		<div class="avatar_wrapper">
			<img
				src="../../assets/batman_avatar_icon.png"
				alt="avatar icon - batman"
			/>
			<div class="text_wrapper">
				<p>{{ userName }}</p>
				<p>"Hard choices, easy life. Easy choices, hard life."</p>
				<p>Jerzy Gregorek</p>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	computed: {
		userName() {
			return this.$store.getters.userName;
		},
	},
};
</script>

<style scoped>
.icon {
	width: 30px;
}

.logo_wrapper {
	display: flex;
	align-items: center;
	padding: 5px 6px;
	background: var(--color-background-dark);
	border-radius: 30px;
	width: 100px;
	max-height: 50px;
	box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.3);
}

.logo_wrapper a {
	color: var(--color-action-first);
	text-decoration: none;
	font-size: 0.8em;
}

.avatar_wrapper img {
	height: 30px;
}

.text_wrapper {
	display: none;
}

ul {
	list-style-type: none;
	display: flex;
	padding: 0;
	padding-top: 3em;
}

ul li a {
	color: var(--color-text-light);
	text-decoration: none;
	padding: 0 1em;
	cursor: pointer;
	font-size: 0.9em;
	font-weight: bold;
}

ul li a:hover {
	color: var(--color-text-medium);
	transition: var(--transition);
}

ul li a.router-link-active {
	background: var(--color-text-light);
	color: var(--color-background-dark);
	padding: 6px 8px;
	border-radius: 30px;
}

nav {
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	margin: 0;
}

@media (min-width: 1200px) {
	nav {
		flex-direction: column;
		justify-content: space-between;
		align-items: end;
		height: 95vh;
		width: 14.5vw;
		position: fixed;
		top: 0;
		left: 0;
	}

	ul {
		flex-direction: column;
	}

	ul li {
		margin-top: 2.5em;
		font-size: 1.2em;
	}

	ul li a.router-link-active {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		padding: 10px 30px;
	}

	.avatar_wrapper {
		/* padding: 0 70px 100px; */
		margin-bottom: 150px;
		background: var(--color-background-medium);
		border-top-left-radius: 30px;
		border-bottom-left-radius: 30px;
	}

	.avatar_wrapper img {
		height: 50px;
		margin-left: -30px;
		margin-bottom: -90px;
	}

	.logo_wrapper {
		margin: 20px 50px 0 0;
	}

	.text_wrapper {
		display: flex;
		flex-direction: column;
		width: 10em;
		height: 10em;
		padding: 0 20px 10px 35px;
	}

	.text_wrapper p:first-child {
		padding: 0;
	}

	.text_wrapper p:nth-child(2) {
		color: var(--color-text-medium);
	}

	.text_wrapper p:nth-child(3) {
		font-size: 0.7em;
	}

	.text_wrapper p {
		font-size: 0.8em;
		padding-top: 1em;
	}
}
</style>
