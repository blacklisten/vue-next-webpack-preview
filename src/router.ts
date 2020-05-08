import { createRouter, createWebHistory } from 'vue-router'
import Page1 from './views/page1.vue'
import Page2 from './views/page2.vue'

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', component: Page1, name: 'Page1' },
		{ path: '/page2', component: Page2, name: 'Page2' },
	],
})
