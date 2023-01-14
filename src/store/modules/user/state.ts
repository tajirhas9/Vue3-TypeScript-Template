import { getLastLoginTime, getToken, getUsername } from '@/utils/cookies'
import { DeviceType } from '@/utils/constants'
import moment from 'moment'
import { IModuleState } from './types'

export const state: IModuleState = {
	token: getToken() ?? null,
	username: getUsername(),
	lastLoginTime: getLastLoginTime() !== null ? moment(getLastLoginTime() as string) : null,
}
