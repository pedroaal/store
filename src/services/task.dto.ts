import { ITask, ITaskRes } from '../types/task'

export const taskDto = (data: ITaskRes): ITask => {
  return {
    id: data.Id,
    title: data.Title,
    description: data.Description,
    status: data.Status,
    createdAt: data.CreatedAt,
  }
}

export const tasksDto = (data: ITaskRes[]) => data.map(taskDto)