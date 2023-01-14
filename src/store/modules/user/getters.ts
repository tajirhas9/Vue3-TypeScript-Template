import { GetterTree } from 'vuex'
import { IRootState } from '../root/types'
import { IModuleGetters, IModuleState } from './types'

export const getters: GetterTree<IModuleState, IRootState> & IModuleGetters = {
	token: (state) => state.token,
	username: (state) => state.username,
	lastLoginTime: (state) => state.lastLoginTime,
}
