<template>
	<DxPopup
		:visible="true"
		:shading="true"
		position="center"
		shading-color="rgba(0, 0, 0, 0.5)"
		:width="700"
		:height="280"
		:showTitle="false"
		:dragEnabled="false"
		:hideOnOutsideClick="false"
		:showCloseButton="false"
	>
		<div class="unsupported unsupported-container">
			<construction-icon />
			<p>Page Under Construction</p>
			<dx-button @click="redirect" type="default" styling-mode="contained">Go back</dx-button>
		</div>
	</DxPopup>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import { useRouter } from 'vue-router'
	import ConstructionIcon from './components/construction-icon.vue'
	import DxPopup from 'devextreme-vue/popup'
	import DxButton from 'devextreme-vue/button'

	const router = useRouter()

	let type = ref('error')

	const redirect = (e: any) => {
		router.back()
	}
</script>
