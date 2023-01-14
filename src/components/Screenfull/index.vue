<template>
	<fullscreen-icon v-if="isFullScreen === false" @click="toggle()" :color="'#5a5e66'" :width="20" :height="25" />
	<exit-fullscreen-icon v-else @click="toggle()" :color="'#5a5e66'" :width="20" :height="25" />
</template>
<script lang="ts">
	import { defineComponent } from 'vue'
	import FullscreenIcon from '@/icons/components/fullscreen.vue'
	import ExitFullscreenIcon from '@/icons/components/exit-fullscreen.vue'
	import screenfull from 'screenfull'
	export default defineComponent({
		name: 'ScreenFull',
		components: {
			FullscreenIcon,
			ExitFullscreenIcon,
		},
		data() {
			return {
				isFullScreen: false,
			}
		},
		methods: {
			toggle() {
				if (!screenfull.isEnabled) {
					console.error('Browser does not support fullscreen')
					return false
				}
				screenfull.toggle()
			},
			change() {
				if (screenfull.isEnabled) {
					this.isFullScreen = screenfull.isFullscreen
				}
			},
		},

		mounted() {
			if (screenfull.isEnabled) {
				screenfull.on('change', this.change)
			}
		},
		beforeDestory() {
			if (screenfull.isEnabled) {
				screenfull.off('change', this.change)
			}
		},
	})
</script>
