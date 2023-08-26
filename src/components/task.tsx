import { useQueryClient } from '@tanstack/solid-query'
import { HiOutlinePencilSquare, HiOutlineArchiveBoxArrowDown } from 'solid-icons/hi'

import { ITask } from '../types/task'
import { formatDate } from '../utils/date'
import { createDeleteTask } from '../services/task.service'
import { TASK_STATUS, TASK_STATUS_COLOR } from '../config/status'

interface IProps extends ITask {
  onEdit: (task: ITask) => void
}

const Task = (props: IProps) => {
  const queryClient = useQueryClient()

  const task = createDeleteTask({
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['tasks'] })
  })

  const handleEdit = () => {
    props.onEdit({...props})
  }

  const handleDelete = () => {
    task.mutate(props.id)
  }

  return (
    <div class='card horizontal-stack'>
      <div class='vertical-stack grow'>
        <div class='horizontal-stack justify-between'>
          <div class='horizontal-stack'>
            <h4>{props.title}</h4>
            <span class={`badge ${TASK_STATUS_COLOR[props.status]}`}>{TASK_STATUS[props.status]}</span>
          </div>
          <span class='text-xs text-gray-700 flex items-center'>{formatDate(props.createdAt)}</span>
        </div>
        <p>{props.description}</p>
      </div>
      <div class='horizontal-stack items-center'>
        <HiOutlinePencilSquare size={24} onClick={handleEdit} />
        <HiOutlineArchiveBoxArrowDown size={24} onClick={handleDelete} />
      </div>
    </div>
  )
}

export default Task