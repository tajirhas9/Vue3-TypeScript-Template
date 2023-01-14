import i18n from '@/lang'
import { store, Store } from '@/store'
import { UserModuleAction } from '@/store/modules/user/types'
import axios from 'axios'
import { ElMessage as Message, ElMessageBox as MessageBox } from 'element-plus'

const environment = process.env.NODE_ENV // process.env.NODE_ENV //
const baseURL = '/api'
const service = axios.create({
	baseURL: baseURL, // url = base url + request url
	// headers: {
	//   'Content-type': 'application/json',
	// },
	timeout: 5000, // request timeout
	// withCredentials: true, // send cookies when cross-domain requests
})

// Request interceptors
service.interceptors.request.use(
	(config) => {
		if (process.env.NODE_ENV === 'development') {
			if (config.method !== 'GET') {
				// // console.log(`[${config.method}/ Request ${config.baseURL}${config.url}]`)
			} else {
				// // console.log(`[${config.method}/ Request ${config.url}] ${JSON.stringify(config.data)}`)
			}
		}
		// Add X-Access-Token header to every request, you can add other custom headers here
		if (store.getters.token) {
			if (config.headers === undefined) {
				throw 'config.headers is undefined'
			}
			config.headers.authorization = store.getters.token
		}
		return config
	},
	(error) => {
		Promise.reject(error)
	}
)

// Response interceptors
service.interceptors.response.use(
	(response) => {
		// Some example codes here:
		// code == 200: success
		// code == 403: invalid access token
		// code == 50002: already login in other place
		// code == 403: access token expired
		// code == 401: invalid user (user not exist)
		// code == 401: username or password is incorrect
		const res = response.data
		if (process.env.NODE_ENV === 'development') {
			// // console.log(`[Response ${response.config.url}] ${JSON.stringify(res)}`)
		}
		if (res.code === undefined) {
			if (response.status === 200) {
				return response.data
			} else {
				return Promise.reject(new Error(res.message || 'Error'))
			}
		}
		if (res.code !== 20000) {
			if (res.code === 50005) {
				// console.log(i18n)
				Message({
					message: i18n.global.t('login.failed'),
					type: 'error',
					duration: 5 * 1000,
				})
			} else if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
				MessageBox.confirm(
					'You have been logged out, you can cancel to stay on this page, or log in again',
					'Sure to log out?',
					{
						confirmButtonText: 'Sign in again',
						cancelButtonText: 'Cancel',
						type: 'warning',
					}
				).then(() => {
					store.dispatch(UserModuleAction.ResetToken)
					location.reload() // To prevent bugs from vue-router
				})
			} else {
				Message({
					message: res.message || 'Error',
					type: 'error',
					duration: 5 * 1000,
				})
			}
			return Promise.reject(new Error(res.message || 'Error'))
		} else {
			return response.data
		}
	},
	(error) => {
		if (process.env.NODE_ENV === 'development') {
			if (!error.response.data.message) {
				console.error('Response message not found.')
			}
		}
		Message({
			message: error.response.data.message ? error.response.data.message : error.message,
			type: 'error',
			duration: 5 * 1000,
		})
		return Promise.reject(error)
	}
)

export default service

export function saveFile(data: any, fileName: string) {
	const blob = new Blob([JSON.stringify(data)], { type: 'text/plain' })
	const e = document.createEvent('MouseEvents')
	const a = document.createElement('a')
	a.download = fileName
	a.href = window.URL.createObjectURL(blob)
	a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
	e.initEvent('click', true, false)
	a.dispatchEvent(e)
}
