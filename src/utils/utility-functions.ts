import moment from 'moment'
import { ComponentCustomProperties } from 'vue'
import { LogOutReason } from './constants'

export const isValidDate = (date: Date) => date instanceof Date && !isNaN(date.getTime())

export const getAgeInDays = (dob: Date): number => {
	let age = moment().diff(moment(dob), 'days')
	return age
}

export const getAgeInWeeks = (dob: Date): number => {
	let age = moment().diff(moment(dob), 'weeks', true)
	return Math.round(age)
}

export const getAgeInMonths = (dob: Date): number => {
	let age = moment().diff(moment(dob), 'months')
	return age
}

export const getAge = (dob: Date): { years: number; days: number } => {
	const date = moment(dob, 'YYYY-MM-DD')
	const years = moment().diff(date, 'years')
	const days = moment().diff(date.add(years, 'years'), 'days', false)
	return {
		years,
		days,
	}
}

export const getAgePretty = (dob: Date): string => {
	let age = getAge(dob)
	if (!isNaN(age.years) && !isNaN(age.days)) {
		if (age.years < 1) {
			let weeks = getAgeInWeeks(dob)
			let days = getAgeInDays(dob) % 7
			return `${weeks} ${weeks > 1 ? 'weeks' : 'week'} ${days} ${days > 1 ? 'days' : 'day'}`
		} else {
			return `${age.years} ${age.years > 1 ? 'years' : 'year'} ${age.days} ${age.days > 1 ? 'days' : 'day'}`
		}
	} else {
		return ''
	}
}

export const prettyDate = (date: Date) => {
	return moment(date).format('DD MMM, yyyy HH:mm a')
}

export function toggleTheme() {
	let theme = document.documentElement.getAttribute('data-theme')
	if (theme === 'dark') {
		document.documentElement.setAttribute('data-theme', 'light')
	} else {
		document.documentElement.setAttribute('data-theme', 'dark')
	}
}

export function activateTheme(theme: string) {
	document.documentElement.setAttribute('data-theme', theme)
}

export function initTheme() {
	const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
	if (darkThemeMq.matches) {
		activateTheme('dark')
	} else {
		activateTheme('light')
	}
	darkThemeMq.addEventListener('change', (e) => {
		if (e.matches) {
			// Theme set to dark.
			activateTheme('dark')
		} else {
			// Theme set to light.
			activateTheme('light')
		}
	})
}
