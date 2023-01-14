<template>
	<svg version="1.1" :viewBox="viewBox" class="international-icon svg-icon svg-fill" style="width: 1em; height: 1em">
		<path
			:style="{ fill: color }"
			d="M108.8 44.3H89.6V39c0-9-3.3-24.2-25.6-24.2-23.1 0-25.6 16.9-25.6 24.2v5.3H19.2V39C19.2 15.3 36.8 0 64 0c27.2 0 44.8 15.3 44.8 39v5.3zm-32 39.4c0-5.5-5.8-9.9-12.8-9.9-7 0-12.8 4.4-12.8 9.9 0 3.7 2.6 6.8 6.4 8.5v11.2c0 2.7 2.9 5 6.4 5 3.5 0 6.4-2.3 6.4-5V92.2c3.8-1.7 6.4-4.8 6.4-8.5zM128 64v49.2c0 8.2-8.6 14.8-19.2 14.8H19.2C8.7 128 0 121.4 0 113.2V64c0-8.2 8.6-14.8 19.2-14.8h89.6c10.6 0 19.2 6.6 19.2 14.8z"
		/>
	</svg>
</template>
<script lang="ts">
	import { defineComponent } from '@vue/runtime-core'

	export default defineComponent({
		name: 'PeopleIcon',
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
