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
		</div>
	</nav>
</template>

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
</style>
