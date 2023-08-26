import { createStore } from 'solid-js/store'
import { For, createSignal, Show } from 'solid-js'
import { HiOutlinePlusCircle } from 'solid-icons/hi'

import { ITask } from '../types/task'
import { DEFAULT_TASK } from '../config/task'
import { createGetTasks, createCreateTask, createUpdateTask } from '../services/task.service'

import Task from './task'
import TaskForm from './task.form'
import { useQueryClient } from '@tanstack/solid-query'

const Tasks = () => {
  const queryClient = useQueryClient()
  
  const [showForm, setShowForm] = createSignal(false)
  const [task, setTask] = createStore<ITask>({...DEFAULT_TASK})
	
  const tasks = createGetTasks()
  const createTask = createCreateTask({
    onSuccess: () => {
      handleCancel()
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    }
  })
  const updateTask = createUpdateTask({
    onSuccess: () => {
      handleCancel()
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    }
  })

  const handleNew = () => {
    setShowForm(true)
    setTask({...DEFAULT_TASK})
  }

  const handleCancel = () => {
    setShowForm(false)
    setTask({...DEFAULT_TASK})
  }

  const handleSubmit = () => {
    if (!task.id) {
      createTask.mutate(task)
    } else {
      updateTask.mutate(task)
    }
  }

  return (
    <div class='bg-gray-800 min-w-screen min-h-screen'>
      <div class='container mx-auto p-8'>
        <div class='flex flex-col'>
          <div class='horizontal-stack justify-between'>
            <h1 class='text-4xl text-white mb-4'>Tasks</h1>
            <HiOutlinePlusCircle size={40} color='#fff' onClick={handleNew} />
          </div>
          <div class='flex flex-col gap-4'>
            <Show when={showForm()}>
              <TaskForm onCancel={handleCancel} {...task} setTask={setTask} onSubmit={handleSubmit} />
            </Show>
            <For each={tasks.data}>
              {(task) => (
                <Task
                  {...task}
                  onEdit={(task) => {
                    setShowForm(true)
                    setTask(task)
                  }}
                />
              )}
            </For>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tasks