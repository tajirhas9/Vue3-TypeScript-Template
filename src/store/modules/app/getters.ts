import { GetterTree } from 'vuex'
import { IRootState } from '../root/types'
import { IModuleGetters, IModuleState } from './types'

export const getters: GetterTree<IModuleState, IRootState> & IModuleGetters = {
	device: (state) => state.device,
	sidebar: (state) => state.sidebar,
	language: (state) => state.language,
	size: (state) => state.size,
}
