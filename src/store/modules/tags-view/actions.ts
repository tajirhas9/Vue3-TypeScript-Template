import { login } from '@/api/users'
import { ActionTree } from 'vuex'
import { IRootState } from '../root/types'
import { IModuleState, TModuleActions, EModuleAction, EModuleMutation } from './types'

export const actions: ActionTree<IModuleState, IRootState> & TModuleActions = {
	async [EModuleAction.addView]({ commit }, view) {
		try {
			commit(EModuleMutation.ADD_VISITED_VIEW, view)
			commit(EModuleMutation.ADD_CACHED_VIEW, view)
		} catch (e) {
			console.error(e)
		}
	},
	async [EModuleAction.addVisitedView]({ commit }, view) {
		try {
			commit(EModuleMutation.ADD_VISITED_VIEW, view)
		} catch (e) {
			console.error(e)
		}
	},
	async [EModuleAction.delView]({ commit, state }, view) {
		try {
			commit(EModuleMutation.DEL_VISITED_VIEW, view)
			commit(EModuleMutation.DEL_CACHED_VIEW, view)
		} catch (e) {
			console.error(e)
		}
	},
	async [EModuleAction.delCachedView]({ commit, state }, view) {
		try {
			commit(EModuleMutation.DEL_CACHED_VIEW, view)
		} catch (e) {
			console.error(e)
		}
	},
	async [EModuleAction.delOthersViews]({ commit, state }, view) {
		try {
			commit(EModuleMutation.DEL_OTHERS_VISITED_VIEWS, view)
			commit(EModuleMutation.DEL_OTHERS_CACHED_VIEWS, view)
		} catch (e) {
			console.error(e)
		}
	},
	async [EModuleAction.delAllViews]({ commit, state }) {
		try {
			commit(EModuleMutation.DEL_ALL_VISITED_VIEWS)
			commit(EModuleMutation.DEL_ALL_CACHED_VIEWS)
		} catch (e) {
			console.error(e)
		}
	},
	async [EModuleAction.delAllCachedViews]({ commit, state }) {
		try {
			commit(EModuleMutation.DEL_ALL_CACHED_VIEWS)
		} catch (e) {
			console.error(e)
		}
	},
	async [EModuleAction.updateVisitedView]({ commit }, view) {
		try {
			commit(EModuleMutation.UPDATE_VISITED_VIEW, view)
		} catch (e) {
			console.error(e)
		}
	},
}
