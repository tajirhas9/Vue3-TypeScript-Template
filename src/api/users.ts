import { ILogin } from '@/store/modules/user/types'
import request from '@/utils/request'

export const login = async (data: ILogin) => {
	const response = await request({
		url: '/users/login',
		method: 'post',
		data,
	})
	return response
}

export const getMails = async () => {
	const response = await request({
		url: '/mails',
		method: 'get',
	})
	return response
}

export const getServerIp = async () => {
	const response = await request({
		url: '/server/ip',
		method: 'get',
	})
	return response
}
