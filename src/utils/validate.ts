import { ElMessage as Message } from 'element-plus'

export const isValidUsername = (username: string) => {
	const regex = /^[a-zA-z0-9]*$/
	return regex.test(String(username))
}

export const isValidEmail = (email: string) => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return re.test(String(email).toLowerCase())
}
export const isExternal = (path: string) => /^(https?:|mailto:|tel:)/.test(path)

export const isArray = (arg: any) => {
	if (typeof Array.isArray === 'undefined') {
		return Object.prototype.toString.call(arg) === '[object Array]'
	}
	return Array.isArray(arg)
}

export const isValidURL = (url: string) => {
	const reg =
		/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
	return reg.test(url)
}

export const isValidStatus = (inputString: string) => {
	return inputString === 'Active' || inputString === 'Inactive'
}

export const validateNewNote = (rule: any, value: any, callback: Function) => {
	switch (rule.field) {
		case 'tableid':
		case 'foreignid':
		case 'status': {
			if (value === undefined || isNaN(value)) {
				Message({
					message: rule.field + ' is required',
					type: 'error',
				})
				callback(new Error(rule.field + ' is required'))
			} else {
				callback()
			}
			break
		}
		case 'note': {
			const prefix = '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>'
			const suffix = '</p>\n</body>\n</html>'
			const emptyNote = 'dy>\n\n</'
			const originalNote = value.substring(prefix.length, value.length - suffix.length)
			// console.log(`isEmpty: ${originalNote === emptyNote}`)
			if (originalNote === emptyNote) {
				Message({
					message: rule.field + ' cannot be empty',
					type: 'error',
				})
				callback(new Error(rule.field + ' is required'))
			} else {
				callback()
			}
			break
		}
		case 'notedate': {
			if (value === '') {
				Message({
					message: rule.field + ' is required',
					type: 'error',
				})
				callback(new Error(rule.field + ' is required'))
			} else {
				callback()
			}
			break
		}
		default: {
			callback()
		}
	}
}
