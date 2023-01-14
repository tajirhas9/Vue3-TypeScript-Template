import { DeviceType } from '@/utils/constants'
import { state as DefaultAppModuleState } from '../app/state'
import { state as DefaultUserModuleState } from '../user/state'
import { state as DefaultSettingsModuleState } from '../settings/state'
import { state as DefaultPermissionModuleState } from '../permission/state'
import { state as DefaultTagsViewState } from '../tags-view/state'
import { IRootState } from './types'

export const state: IRootState = {
	storeVersion: '1.0.0',
	app: DefaultAppModuleState,
	user: DefaultUserModuleState,
	settings: DefaultSettingsModuleState,
	permission: DefaultPermissionModuleState,
	tagsView: DefaultTagsViewState,
}
