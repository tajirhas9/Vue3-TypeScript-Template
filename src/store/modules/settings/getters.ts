import { GetterTree } from 'vuex'
import { IRootState } from '../root/types'
import { IModuleGetters, IModuleState } from './types'

export const getters: GetterTree<IModuleState, IRootState> & IModuleGetters = {
	theme: (state) => state.settings.theme,
	fixedHeader: (state) => state.settings.fixedHeader,
	showSettings: (state) => state.settings.showSettings,
	showTagsView: (state) => state.settings.showTagsView,
	showSidebarLogo: (state) => state.settings.showSidebarLogo,
	sidebarTextTheme: (state) => state.settings.sidebarTextTheme,
}
