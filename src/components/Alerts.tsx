import { Component, useContext, For, createMemo, Show } from 'solid-js'
import { HiSolidCheckCircle, HiSolidXCircle, HiSolidInformationCircle, HiSolidExclamationCircle } from 'solid-icons/hi'

import { IAlert } from '../types/alert'
import { AlertsContext } from '../store/Alerts'
import { ALERT_TYPE } from '../constants/alerts'

const Alert: Component<IAlert> = (props) => {
  const {title, message, type} = props

  const icon = createMemo(() => {
    switch (type) {
    case ALERT_TYPE.SUCCESS:
      return <HiSolidCheckCircle class='w-6 h-6 text-green-600' />
    case ALERT_TYPE.ERROR:
      return <HiSolidXCircle class='w-6 h-6 text-red-600' />
    case ALERT_TYPE.INFO:
      return <HiSolidInformationCircle class='w-6 h-6 text-blue-600' />
    case ALERT_TYPE.WARNING:
      return <HiSolidExclamationCircle class='w-6 h-6 text-orange-600' />
    }
  })

  const color = createMemo(() => {
    switch (type) {
    case ALERT_TYPE.SUCCESS:
      return 'bg-green-200 text-green-600'
    case ALERT_TYPE.ERROR:
      return 'bg-red-200 text-red-600'
    case ALERT_TYPE.INFO:
      return 'bg-blue-200 text-blue-600'
    case ALERT_TYPE.WARNING:
      return 'bg-orange-200 text-orange-600'
    }
  })

  return (
    <div class={`p-4 rounded-lg ${color()}`}>
      <div class='flex gap-2'>
        {icon()}
        <div class='grow flex flex-col'>
          <h6>{title}</h6>
          <p>{message}</p>
        </div>
      </div>
    </div>
  )
}

export const Alerts: Component = () => {
  const {alerts} = useContext(AlertsContext)
  
  return (
    <Show when={alerts().length}>
      <div class='fixed top-0 right-0 p-8 flex flex-col gap-2'>
        <For each={alerts()}>
          {alert => <Alert {...alert} />}
        </For>
      </div>
    </Show>
  )
}