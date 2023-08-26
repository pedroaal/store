import { ITask } from '../types/task'
import { TASK_STATUS } from './status'

export const DEFAULT_TASK: ITask = {
  id: undefined,
  title: '',
  description: '',
  status: TASK_STATUS.PENDING,
  createdAt: undefined
}