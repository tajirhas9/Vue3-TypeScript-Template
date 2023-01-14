import { ActionTree } from 'vuex'
import { IRootState } from '../root/types'
import { IModuleState, TModuleActions, EModuleAction, EModuleMutation, TSetting } from './types'

export const actions: ActionTree<IModuleState, IRootState> & TModuleActions = {
	[EModuleAction.ChangeSetting]({ commit }, payload: TSetting) {
		commit(EModuleMutation.CHANGE_SETTING, payload)
	},
}
