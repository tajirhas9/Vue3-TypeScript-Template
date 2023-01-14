import { DeviceType } from '@/utils/constants'
import { IModuleState } from './types'

export const state: IModuleState = {
	device: DeviceType.Desktop,
	sidebar: {
		opened: false,
		withoutAnimation: false,
	},
	language: 'en',
	size: '',
}
