import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DashboardView from '../views/DashboardView.vue';
import GoalsView from '../views/GoalsView.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: HomeView,
		},
		{
			path: '/dashboard',
			component: DashboardView,
		},
		{
			path: '/goals',
			component: GoalsView,
		},
	],
});

export default router;
