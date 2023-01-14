import { GetterTree } from 'vuex'
import { IRootState } from '../root/types'
import { IModuleGetters, IModuleState } from './types'

export const getters: GetterTree<IModuleState, IRootState> & IModuleGetters = {
	visitedViews: (state) => state.visitedViews,
	cachedViews: (state) => state.cachedViews,
}
