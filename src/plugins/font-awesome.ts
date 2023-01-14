import { library, IconPack, IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { fas, faUser, faHouse } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { App } from 'vue'

export const faPlugin = {
	install(app: App) {
		library.add(fas as IconPack)

		// Solid icons
		library.add(faUser as IconDefinition)
		library.add(faTwitter as IconDefinition)
		library.add(faInstagram as IconDefinition)
		library.add(faHouse as IconDefinition)

		// Regular icons
		library.add(faTimesCircle as IconDefinition)

		app.component('fa', FontAwesomeIcon)
	},
}
