import { Module } from 'vuex'
import { IRootState } from '../root/types'
import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'
import { state } from './state'
import { IModuleState } from './types'

const SettingsModule: Module<IModuleState, IRootState> = {
	state,
	getters,
	mutations,
	actions,
}

export default SettingsModule
