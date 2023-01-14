import { login } from '@/api/users'
import { RouteRecordRaw } from 'vue-router'
import { ActionTree } from 'vuex'
import { IRootState } from '../root/types'
import { IModuleState, TModuleActions, EModuleAction, EModuleMutation } from './types'

export const actions: ActionTree<IModuleState, IRootState> & TModuleActions = {
	async [EModuleAction.SetRoutes]({ commit }, routes: RouteRecordRaw[]) {
		try {
			commit(EModuleMutation.SET_ROUTES, routes)
		} catch (e) {
			console.error(e)
		}
	},
	[EModuleAction.AddNewRoute]({ commit }, newroute: RouteRecordRaw) {
		try {
			commit(EModuleMutation.ADD_NEW_ROUTE, newroute)
		} catch (e) {
			console.error(e)
		}
	},
	[EModuleAction.AddNestedRoute]({ commit }, routeInfo: { parent: string; route: RouteRecordRaw }) {
		try {
			commit(EModuleMutation.ADD_NESTED_ROUTE, routeInfo)
		} catch (e) {
			console.error(e)
		}
	},
}
