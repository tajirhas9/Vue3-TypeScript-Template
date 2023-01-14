import { createApp } from 'vue'
import App from './App.vue'
import i18n from './lang'
import router from './router'
import ElementPlus from 'element-plus'

import '@/styles/element-variables.scss'
import '@/styles/index.scss'
import 'element-plus/dist/index.css'
import { store } from './store'
import '@/router/nav-guard'
import 'devextreme/dist/css/dx.material.blue.light.compact.css'
// import 'devextreme/dist/css/dx.material.blue.dark.compact.css'
import { faPlugin } from '@/plugins/font-awesome'
import { globalPlugin } from './plugins/global-plugin'
import dayjs from 'dayjs'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'

dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(store)
app.use(i18n)
app.use(faPlugin)
app.use(globalPlugin)
app.mount('#app')

export default app
