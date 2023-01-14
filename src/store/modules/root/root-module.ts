import { Module, ModuleTree } from 'vuex'
import AppModule from '../app/app-module'
import PermissionModule from '../permission/permission-module'
import SettingsModule from '../settings/settings-module'
import TagsViewModule from '../tags-view/tags-module'
import UserModule from '../user/user-module'
import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'
import { state } from './state'
import { IRootState } from './types'

const modules: ModuleTree<IRootState> = {
	AppModule,
	UserModule,
	SettingsModule,
	PermissionModule,
	TagsViewModule,
}

const RootModule: Module<IRootState, IRootState> = {
	state,
	getters,
	mutations,
	actions,
	modules,
}

export default RootModule
