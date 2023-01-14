import router, { ERoutes, routes } from './index'
import NProgress from 'nprogress'
import i18n from '@/lang'
import settings from '@/settings'
import { store, Store } from '@/store'
import { RouteLocationNormalized as Route, RouteRecordRaw } from 'vue-router'
import { PermissionModuleAction } from '@/store/modules/permission/types'
import FormView from '@/views/form/index.vue'
import { FormTypes } from '@/utils/constants'
import { UserModuleAction } from '@/store/modules/user/types'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login', 'auth-redirect']

const getPageTitle = (key: string) => {
	const hasKey = i18n.global.t(`route.${key}`)

	if (hasKey) {
		const pageName = i18n.global.t(`route.${key}`)
		return `${pageName} - ${settings.title}`
	}
	return `${settings.title}`
}

router.beforeEach(async (to: Route, _: Route, next: any) => {
	NProgress.start()

	// TODO: un-comment below when authentication system is introduced
	// Determine whether the user has logged in
	// if (store.getters.token) {
	// 	if (to.path === '/login') {
	// 		// If is logged in, redirect to the home page
	// 		next({ path: '/' })
	// 	} else {
	// 		if (to.name === undefined) {
	// 			next({ path: '/' })
	// 		} else {
	// 			if (store.getters.routes.length === 0) {
	// 				await store.dispatch(PermissionModuleAction.SetRoutes, routes)
	// 			}
	// 			next()
	// 		}
	// 	}
	// } else {
	// 	// Has no token
	// 	if (whiteList.indexOf(to.path) !== -1) {
	// 		// In the free login whitelist, go directly
	// 		next()
	// 	} else {
	// 		// Other pages that do not have permission to access are redirected to the login page.
	// 		store.dispatch(UserModuleAction.Logout)
	// 		next(`/login?redirect=${to.path}`)
	// 	}
	// }
	next()
})

router.afterEach((to: Route) => {
	NProgress.done()
	document.title = getPageTitle(to.meta.title as string)
})
