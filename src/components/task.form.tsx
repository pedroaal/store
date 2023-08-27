import { For } from 'solid-js'

import { ITask, ITaskStatus } from '../types/task'
import { TASK_STATUS } from '../config/status'

interface IProps extends ITask {
  onCancel: () => void
  setTask: (task: ITask) => void
  onSubmit: () => void
}

const TaskForm = (props: IProps) => {
  
  const handleForm = (event) => {
    props.setTask((state) => ({...state, [event.currentTarget.name]: event.currentTarget.value}))
  }

  const handleCancel = () => {
    props.onCancel()
  }

  return (
    <div class='card vertical-stack'>
      <div>
        <label for="title">Title</label>
        <input class='input' type="text" name='title' id='title' value={props.title} onChange={handleForm}/>
      </div>
      <div>
        <label for="description">Description</label>
        <input class='input' type="text" name='description' id='description' value={props.description} onChange={handleForm}/>
      </div>
      <div>
        <label for="status">Status</label>
        <select class='input' name="status" id="status" disabled={!props.id} onChange={handleForm}>
          <For each={Object.keys(TASK_STATUS)}>
            {(key: ITaskStatus) => <option value={key} selected={props.status === key}>{TASK_STATUS[key]}</option>}
          </For>
        </select>
      </div>
      <div class='horizontal-stack right'>
        <button class='button secondary' type="button" onClick={handleCancel}>Cancel</button>
        <button class='button primary' type="button" onClick={props.onSubmit}>Save</button>
      </div>
    </div>
  )
}

export default TaskForm