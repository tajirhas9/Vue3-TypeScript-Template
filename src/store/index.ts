/**
 * @file Vuex store
 * @author Syed Tajir Hasnain
 */

import { createStore } from 'vuex'
import { IModule as IAppModule } from './modules/app/types'
import { IModule as IUserModule } from './modules/user/types'
import { IModule as ISettingsModule } from './modules/settings/types'
import { IModule as IPermissionModule } from './modules/permission/types'
import { IModule as ITagsViewModule } from './modules/tags-view/types'
import RootModule from './modules/root/root-module'
import { IRootModule, IRootState } from './modules/root/types'
import { state } from './modules/root/state'

export const store = createStore<IRootState>(RootModule)

type StoreModules = {
	app: IAppModule
	root: IRootModule
	user: IUserModule
	settings: ISettingsModule
	permission: IPermissionModule
	tagsView: ITagsViewModule
}

//! README
/**
 * To add new module, follow the following steps:
 * 1. Duplicate any module directory
 * 2. Change the module's types
 * 3. Implement states
 * 4. Implement getters
 * 5. Implement Mutations
 * 6. Implement Actions
 * 7. Change the alias names in the module's `index.ts` file
 * 8. Add the new module to `src/store/modules/index.ts`
 * 9. Add new state interface to {@link IRootState}
 * 10. Add new state to {@link state}
 * 10. Add new module to `modules` in {@link RootModule}
 * 11. Add new module to {@link StoreModules}
 * 12. Add the new module to the type definition of {@link Store}
 */
export type Store = IAppModule<Pick<StoreModules, 'app'>> &
	IUserModule<Pick<StoreModules, 'user'>> &
	ISettingsModule<Pick<StoreModules, 'settings'>> &
	IPermissionModule<Pick<StoreModules, 'permission'>> &
	ITagsViewModule<Pick<StoreModules, 'tagsView'>> &
	IRootModule<Pick<StoreModules, 'root'>>
