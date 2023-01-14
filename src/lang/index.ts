import Vue from 'vue'
import { createI18n } from 'vue-i18n'

import { getLanguage } from '@/utils/cookies'

// element-plus built-in lang
import elementEnLocale from 'element-plus/lib/locale/lang/en'
import elementEsLocale from 'element-plus/lib/locale/lang/es'
import elementJaLocale from 'element-plus/lib/locale/lang/ja'
import elementKoLocale from 'element-plus/lib/locale/lang/ko'

// User defined lang
import enLocale from './en'
import zhLocale from './zh'
import esLocale from './es'
import jaLocale from './ja'
import koLocale from './ko'
import itLocale from './it'
import nlSRLocale from './nl-SR'
import enNZLocale from './en-NZ'
import { store } from '@/store'

const messages = {
	en: {
		...enLocale,
		...elementEnLocale,
	},
	es: {
		...esLocale,
		...elementEsLocale,
	},
	ja: {
		...jaLocale,
		...elementJaLocale,
	},
	ko: {
		...koLocale,
		...elementKoLocale,
	},
	it: {
		...itLocale,
	},
	'nl-SR': {
		...nlSRLocale,
	},
	'en-NZ': {
		...enNZLocale,
	},
}

export const getLocale = () => {
	try {
		const cookieLanguage = store.getters.language
		if (cookieLanguage) {
			document.documentElement.lang = cookieLanguage
			return cookieLanguage
		}

		const language = navigator.language.toLowerCase()
		const locales = Object.keys(messages)
		for (const locale of locales) {
			if (language.indexOf(locale) > -1) {
				document.documentElement.lang = locale
				return locale
			}
		}

		// Default language is english
		return 'en'
	} catch (e) {
		console.error(e)
	}
}

const i18n = createI18n({
	locale: getLocale(),
	messages,
})

export default i18n
