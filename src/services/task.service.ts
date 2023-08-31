import { CreateMutationOptions, createMutation, createQuery } from '@tanstack/solid-query'

import baseQuery from '../utils/baseQuery'
import { ITask } from '../types/task'
import { taskDto, tasksDto } from './task.dto'

export const createGetTasks = () => createQuery({
  queryKey: () => ['tasks'],
  queryFn: async () => await baseQuery({
    url: '/task',
    method: 'GET',
    transform: tasksDto
  })
})

export const createCreateTask = (options?: Omit<CreateMutationOptions<unknown, unknown, ITask, unknown>, 'mutationFn'>) => createMutation({
  ...options,
  mutationFn: async (data: ITask) => await baseQuery({
    url: '/task',
    method: 'POST',
    data,
    transform: taskDto
  })
})

export const createUpdateTask = (options?: Omit<CreateMutationOptions<unknown, unknown, ITask, unknown>, 'mutationFn'>) => createMutation({
  ...options,
  mutationFn: async (data: ITask) => await baseQuery({
    url: `/task/${data.id}`,
    method: 'PUT',
    data,
    transform: taskDto
  })
})

export const createDeleteTask = (options?: Omit<CreateMutationOptions<unknown, unknown, number, unknown>, 'mutationFn'>) => createMutation({
  ...options,
  mutationFn: async (id: number) => await baseQuery({
    url: `/task/${id}`,
    method: 'DELETE'
  })
})