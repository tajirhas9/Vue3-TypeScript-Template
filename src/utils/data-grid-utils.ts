/**
 *
 * @param e [Object properties](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onExporting)
 */

import { exportDataGrid } from 'devextreme/excel_exporter'
import { Workbook } from 'exceljs'
import { FileSaver } from 'file-saver'

export const exportGrid = (e: {
	cancel: boolean
	component: any // DataGrid
	element: HTMLElement
	fileName: string
	model: any
	format: string | 'pdf' | 'xlsx'
	selectedRowsOnly: boolean
}) => {
	/**
	 * Handles exporting and downloading
	 */
	const fileName = `${e.fileName}.xlsx`
	const workbook = new Workbook()
	const worksheet = workbook.addWorksheet('Main sheet')
	exportDataGrid({
		worksheet: worksheet,
		component: e.component,
	}).then(function () {
		workbook.xlsx.writeBuffer().then(function (buffer) {
			;(FileSaver as any).saveAs(
				new Blob([buffer], {
					type: 'application/octet-stream',
				}),
				fileName
			)
		})
	})
	e.cancel = true
}
