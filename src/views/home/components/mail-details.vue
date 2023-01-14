<template>
	<main>
		<dx-load-panel
			:position="loadPanelPosition"
			v-model:visible="listLoading"
			:show-indicator="true"
			:show-pane="true"
			:shading="true"
			shading-color="rgba(0,0,0,0.4)"
		/>
		<dx-data-grid
			id="detailsGrid"
			class="grid"
			height="inherit"
			ref="dataGridRef"
			:data-source="store"
			:show-borders="true"
			:show-column-lines="true"
			:row-alternation-enabled="true"
			:column-auto-width="true"
			:allow-column-resizing="true"
			:allow-column-reordering="true"
			@exporting="exportGrid"
			:word-wrap-enabled="true"
		>
			<dx-scrolling row-rendering-mode="virtual" />
			<dx-filter-row :visible="true" />
			<dx-search-panel :visible="true" />
			<dx-export :enabled="true" />
			<!-- <dx-group-panel :visible="true" />
			<dx-grouping :auto-expand-all="true" /> -->
			<dx-pager
				:visible="true"
				:allowed-page-sizes="pageSizes"
				:show-page-size-selector="true"
				:show-navigation-buttons="true"
			/>
			<dx-paging :page-size="10" />

			<!-- <dx-column data-source="from" caption="From" header-cell-template="title-header" />
			<dx-column data-source="to" caption="To" :group-index="0" header-cell-template="title-header" />
			<dx-column data-source="date" caption="Date" data-type="date" header-cell-template="title-header" />
			<dx-column data-source="subject" caption="Subject" header-cell-template="title-header" /> -->

			<template #title-header="{ data }">
				<div class="table-header">
					<p class="text">{{ data.column.caption }}</p>
				</div>
			</template>
			<template #statusTemplate="{ data }">
				<el-tag :type="data.text === 'Active' ? 'success' : 'danger'">
					{{ data.text }}
				</el-tag>
			</template>
		</dx-data-grid>
	</main>
</template>

<script setup lang="ts">
	import { computed, onMounted, reactive, Ref, ref, watch, defineProps } from 'vue'
	import { exportGrid } from '@/utils/data-grid-utils'
	import {
		DxDataGrid,
		DxGrouping,
		DxGroupPanel,
		DxPager,
		DxPaging,
		DxSearchPanel,
		DxExport,
		DxFilterRow,
		DxLoadPanel,
		DxColumn,
		DxScrolling,
	} from 'devextreme-vue/data-grid'
	import { ElTag } from 'element-plus'
	import { IMail, ISocketMessage, MessageType, Status } from '@/utils/types'
	import { isEmpty } from 'lodash'

	const props = defineProps({
		mails: {
			type: Array<IMail>,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
	})
	const dataGridRef = ref<any>()
	const pageSizes = [10, 20, 50, 100]
	const loadPanelPosition = {
		of: '#mailGrid',
		at: 'center',
		my: 'center',
	}
	let listLoading = ref(true)

	let store = computed(() => {
		return {
			store: mails.value,
			reshapeOnPush: true,
		}
	})
	let mails = computed(() => props.mails)

	function updateColumns() {
		let columnsList = [
			{
				dataField: 'from',
				caption: 'From',
			},
			// {
			// 	dataField: 'to',
			// 	caption: 'To',
			// 	groupIndex: 0,
			// },
			{
				dataField: 'date',
				caption: 'Date',
				dataType: 'date',
			},
			{
				dataField: 'subject',
				caption: 'Subject',
			},
		]
		dataGridRef.value!.instance.option('columns', columnsList)
	}

	function updateStore() {
		let dataSource = dataGridRef.value!.instance.getDataSource()

		mails.value.forEach((mail: IMail) => {})
	}

	onMounted(() => {
		updateColumns()
	})

	watch(mails, (newVal, oldVal) => {
		if (!isEmpty(newVal)) {
			updateStore()
		} else {
			console.warn(`empty store for ${props.email}`)
		}
	})
</script>

<style lang="scss" scoped></style>
