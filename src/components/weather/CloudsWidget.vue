<template>
	<BaseCard>
		<h2>Today's sky in Berlin</h2>
		<p>
			Clouds <span>{{ clouds }}%</span>
		</p>
		<h3>{{ cloudsDesc }}</h3>
	</BaseCard>
</template>

<script>
export default {
	props: ['clouds', 'cloudsDesc'],
};
</script>
