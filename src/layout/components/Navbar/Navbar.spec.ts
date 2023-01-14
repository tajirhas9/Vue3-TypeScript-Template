import { mount, shallowMount } from '@vue/test-utils'
import Navbar from '@/layout/components/Navbar/index.vue'
import { createStore, Store as VuexStore } from 'vuex'
import { store, Store } from '@/store/index'
import RootModule from '@/store/modules/root/root-module'
import { IRootState } from '@/store/modules/root/types'
import router from '@/router'
import ElementPlus from 'element-plus'
import i18n from '@/lang'
import { beforeEach, describe, it, expect } from 'vitest'

const createMockStore = () => {
	const store = createStore<IRootState>(RootModule)
	return store
}

describe('Navbar component Test', () => {
	let wrapper: any
	beforeEach(() => {
		wrapper = mount(Navbar, {
			global: {
				// plugins: [router, store, i18n],
			},
		})
	})
	it('should mount the component', () => {
		expect(wrapper).toBeDefined()
	})
	// it('should contain logout button', () => {
	//   const logoutButton = wrapper.find('[data-testid="logout-button"]')
	//   expect(logoutButton.exists()).toBe(true)
	// })
})
