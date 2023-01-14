// Set utils function parseTime to filter

// // Filter for article status
// export const articleStatusFilter = (status: string) => {
//   const statusMap: { [key: string]: string } = {
//     published: 'success',
//     draft: 'info',
//     deleted: 'danger'
//   }
//   return statusMap[status]
// }

export const statusFilter = (status: string) => {
	const statusMap: { [key: string]: string } = {
		Active: 'success',
		Inactive: 'danger',
	}
	return statusMap[status]
}

export const booleanFilter = (status: number) => {
	const map: { [key: number]: string } = {
		1: 'success',
		2: 'warning',
		0: 'danger',
	}
	return map[status]
}

// Filter to uppercase the first character
export const uppercaseFirstChar = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1)
}
