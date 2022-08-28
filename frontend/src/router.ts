import { createRouter, createWebHistory } from 'vue-router'
const routes = [
		{
				path: '/',
				name: 'Home',
				component: () => import(/* webpackChunkName: "home" */ './pages/Home.vue')
		},
		{
				path: '/match',
				name: 'Match',
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import(/* webpackChunkName: "match" */ './pages/Match.vue')
		},
		{
				path: '/dashboard',
				name: 'Dashboard',
				component: () => import(/* webpackChunkName: "graph" */ './pages/Dashboard.vue')
		},
		{
				path: '/debug',
				name: 'Debug Buttons',
				component: () => import(/* webpackChunkName: "graph" */ './pages/Debug.vue')
		},
		// a dynamic route with a parameter ID that is matched with the ID of the tender
		// {
		//     path: '/tender/:id',
		//     name: 'Tender detail',
		//     component: () => import(/* webpackChunkName: "about" */ './views/Tender.vue')
		// }
]
const router = createRouter({
		history: createWebHistory(),
		routes
})
export default router