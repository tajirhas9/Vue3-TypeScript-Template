import types, { MutationTree } from 'vuex'
import { setToken } from '@/utils/cookies'
import { IModuleState, TModuleMutations, EModuleMutation } from './types'
import { routes } from '@/router'
import { RouteRecordRaw } from 'vue-router'

export const mutations: MutationTree<IModuleState> & TModuleMutations = {
	[EModuleMutation.SET_ROUTES](state, routes: RouteRecordRaw[]) {
		state.routes = routes
	},
	[EModuleMutation.ADD_NEW_ROUTE](state, newRoute: RouteRecordRaw) {
		state.routes = state.routes.concat(newRoute)
		state.dynamicRoutes = state.dynamicRoutes.concat(newRoute)
	},
	[EModuleMutation.ADD_NESTED_ROUTE](state, routeInfo: { parent: string; route: RouteRecordRaw }) {
		try {
			let updatedRoutes = state.routes
			for (let i = 0; i < state.routes.length; ++i) {
				if (state.routes[i].name === routeInfo.parent) {
					if (updatedRoutes[i].children === undefined) {
						updatedRoutes[i].children = [routeInfo.route]
					} else {
						updatedRoutes[i].children!.push(routeInfo.route)
					}
					break
				}
			}
			state.routes = updatedRoutes
		} catch (e) {
			console.error(e)
		}
	},
}
