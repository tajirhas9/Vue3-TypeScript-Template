<template>
	<svg version="1.1" :viewBox="viewBox" class="international-icon svg-icon svg-fill" style="width: 1em; height: 1em">
		<path
			:style="{ fill: color }"
			pid="0"
			d="M95.6 118.8c0 5-3.5 9-8 9H8c-4.4 0-8-4-8-9 0-18.3 15.4-35.3 31.2-42a37.8 37.8 0 01-15.3-31v-9.2C16 16.5 30.2.1 48 .1s31.8 16.4 31.8 36.5v9.2c0 13-6.1 24.5-15.2 31 15.7 6.7 31.1 23.7 31.1 42z"
		/>
		<path
			pid="1"
			d="M106 118.3h16c3.4 0 6.1-3.2 6.1-7 0-14-11.8-27-23.8-32.1 7-5 11.6-13.7 11.6-23.7v-7c0-15.4-11-28-24.4-28-1.6 0-3.3.2-4.9.6 2 4.7 3 10 3 15.5v9.2c0 13-3 23-11 31 14.8 4.4 27.3 23.4 27.5 41.5z"
		/>
	</svg>
</template>
<script lang="ts">
	import { defineComponent } from '@vue/runtime-core'

	export default defineComponent({
		name: 'PeoplesIcon',
		props: {
			color: {
				type: String,
				default: '#fff',
			},
			width: {
				type: Number,
				default: 128,
			},
			height: {
				type: Number,
				default: 128,
			},
		},
		computed: {
			fontColor: function () {
				return this.color === '#fff' ? '#000' : '#fff'
			},
			viewBox: function () {
				return `0 0 ${this.width} ${this.height}`
			},
		},
	})
</script>
