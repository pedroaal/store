import { TASK_STATUS } from '../config/status'

export type ITaskStatus = typeof TASK_STATUS[keyof typeof TASK_STATUS]

export interface ITask {
	id?: number
	title: string
	description: string
	status: ITaskStatus
	createdAt?: Date
}