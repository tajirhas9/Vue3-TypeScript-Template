import { GetterTree } from 'vuex'
import { IRootGetters, IRootState } from './types'

export const getters: GetterTree<IRootState, IRootState> & IRootGetters = {
	storeVersion: (state) => state.storeVersion,
}
