import Cookies from 'js-cookie'
import moment from 'moment'
import { Moment } from 'moment'
import { StringOrNull } from './types'

// App
const sidebarStatusKey = 'sidebar_status'
export const getSidebarStatus = () => Cookies.get(sidebarStatusKey)
export const setSidebarStatus = (sidebarStatus: string) => Cookies.set(sidebarStatusKey, sidebarStatus)

const languageKey = 'language'
export const getLanguage = () => Cookies.get(languageKey)
export const setLanguage = (language: string) => Cookies.set(languageKey, language)

const sizeKey = 'size'
export const getSize = () => Cookies.get(sizeKey)
export const setSize = (size: string) => Cookies.set(sizeKey, size)

// User
const tokenKey = 'access_token'
export const getToken = () => Cookies.get(tokenKey) ?? null
export const setToken = (token: string) => Cookies.set(tokenKey, token)
export const removeToken = () => Cookies.remove(tokenKey)

const usernameKey = 'username'
export const setUsername = (username: string) => Cookies.set(usernameKey, username)
export const getUsername = (): string => Cookies.get(usernameKey) ?? ''
export const removeUsername = () => Cookies.remove(usernameKey)

const lastLoginKey = 'lastlogintime'
export const setLastLoginTime = (_time: Moment) => Cookies.set(lastLoginKey, _time.format())
export const getLastLoginTime = (): StringOrNull => Cookies.get(lastLoginKey) ?? null
export const removeLastLoginTime = () => Cookies.remove(lastLoginKey)
