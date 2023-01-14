import { ActionTree } from 'vuex'
import { IRootState } from '../root/types'
import { IModuleState, TModuleActions, EModuleAction, EModuleMutation } from './types'

export const actions: ActionTree<IModuleState, IRootState> & TModuleActions = {
	[EModuleAction.ToggleSideBar]({ commit }, withoutAnimation) {
		commit(EModuleMutation.TOGGLE_SIDEBAR, withoutAnimation)
	},
	[EModuleAction.CloseSideBar]({ commit }, withoutAnimation) {
		commit(EModuleMutation.CLOSE_SIDEBAR, withoutAnimation)
	},
	[EModuleAction.ToggleDevice]({ commit }, device) {
		commit(EModuleMutation.TOGGLE_DEVICE, device)
	},
	[EModuleAction.SetLanguage]({ commit }, language) {
		commit(EModuleMutation.SET_LANGUAGE, language)
	},
	[EModuleAction.SetSize]({ commit }, size) {
		commit(EModuleMutation.SET_SIZE, size)
	},
}
