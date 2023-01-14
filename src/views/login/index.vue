<template>
	<main>
		<!-- <dx-form :form-data="userInfo">
			<dx-group-item>
				<dx-label template="emailLabel" />
				<dx-item data-field="email" />
			</dx-group-item>
			<template #emailLabel="{ data }"> <i class="dx-icon dx-icon-email" />{{ data.text }} </template>
		</dx-form> -->
	</main>
</template>

<script setup lang="ts">
	import { onMounted } from 'vue'
	import { DxForm, DxItem, DxGroupItem, DxLabel } from 'devextreme-vue/form'

	let userInfo = {
		email: '',
		password: '',
	}

	onMounted(() => {})
</script>
<style scoped lang="scss"></style>
