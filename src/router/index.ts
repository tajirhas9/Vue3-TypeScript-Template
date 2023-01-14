import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
import app from '@/main'
import Layout from '@/layout/index.vue'
import Home from '@/views/home/index.vue'
import Login from '@/views/login/index.vue'
import QueueView from '@/views/queue/index.vue'
import MappingView from '@/views/mapping/index.vue'
import ConfigurationView from '@/views/configuration/index.vue'
import ProfileView from '@/views/profile/index.vue'
import ChartView from '@/views/chart-view/index.vue'
import { fa } from 'element-plus/es/locale'

// TODO: dummy templates

export enum ERoutes {
	Login = 'login',
	Home = 'home',
	Views = 'views',
	ChartView = 'chart-view',
	Forms = 'forms',
	Queue = 'queue',
	Configuration = 'configuration',
	Mappings = 'mappings',
	Profile = 'profile',
}

export const routes: Array<RouteRecordRaw> = [
	// {
	// 	path: '/login',
	// 	name: ERoutes.Login,
	// 	component: Login,
	// 	meta: {
	// 		hidden: true,
	// 		title: ERoutes.Login,
	// 		requiresAuth: false,
	// 	},
	// },
	{
		path: '/',
		redirect: '/home',
		component: Layout,
		children: [
			{
				path: 'home',
				name: ERoutes.Home,
				meta: {
					title: ERoutes.Home,
					icon: 'home',
					requiresAuth: true,
					affix: true,
					isChild: true,
					showBanner: true,
				},
				component: Home,
			},
		],
	},
	{
		path: '/login',
		name: ERoutes.Login,
		component: Login,
		meta: {
			hidden: true,
			title: ERoutes.Login,
			requiresAuth: false,
			showBanner: false,
		},
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
