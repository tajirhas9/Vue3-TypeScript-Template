import { ComponentPublicInstance, ComponentOptionsBase, Ref } from 'vue'
import { LoadingParentElement } from 'element-plus'

export type StringOrNull = String | null
export type NumberOrNull = number | null
export type TimeoutOrNull = ReturnType<typeof setTimeout> | null
export type ParamInfo = {
	id: number
	name: string
	category: string
	profile: string
}

export type ParamData = {
	id: number
	name: string
	category: string
	values: {
		time: string
		value: NumberOrNull
	}[]
}

export enum MessageType {
	NONE = 0,
	STATUS = 1,
	DATA = 2,
}

export enum Status {
	None = 0,
	RequestConnection = 1,
	ConnectionEstablished = 2,
	Processing = 3,
	Complete = 4,
}

export interface ISocketMessage {
	message: string
	type: MessageType
	status: Status
}

export interface IServerResponse {
	message: string
	type: MessageType
	status: Status
}

export interface IMail {
	from: string
	to: string
	date: string
	subject: string
}

export interface IElLoading {
	close: any
	setText?: (text: string) => void
	removeElLoadingChild?: () => void
	handleAfterLeave?: () => void
	vm?: ComponentPublicInstance<
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		false,
		ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>,
		{}
	>
	$el?: HTMLElement
	originalPosition?: Ref<string>
	originalOverflow?: Ref<string>
	visible?: Ref<boolean>
	parent?: Ref<LoadingParentElement>
	background?: Ref<string>
	svg?: Ref<string>
	svgViewBox?: Ref<string>
	spinner?: Ref<string | boolean>
	text?: Ref<string>
	fullscreen?: Ref<boolean>
	lock?: Ref<boolean>
	customClass?: Ref<string>
	target?: Ref<HTMLElement>
	beforeClose?: Ref<(() => boolean) | undefined> | undefined
	closed?: Ref<(() => void) | undefined> | undefined
}
