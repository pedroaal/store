import { Accessor, Component, JSXElement, createContext, createSignal } from 'solid-js'

import { IAlert } from '../types/alert'

interface IAlertsStore {
  alerts: Accessor<IAlert[]>
  addAlert: (alert: IAlert) => void
}

interface IAlertsProviderProps {
  children: JSXElement
}

export const AlertsContext = createContext<IAlertsStore>({
  alerts: () => [],
  addAlert: () => {}
})

export const AlertsProvider: Component<IAlertsProviderProps> = (props) => {
  const [alerts, setAlerts] = createSignal<IAlert[]>([])

  const remove = (id: number) => {
    setAlerts(state => state.filter(alert => alert.id !== id))
  }

  const addAlert = (alert: IAlert) => {
    setAlerts(state => [...state, alert])
    setTimeout(() => {
      remove(alert.id)
    }, 5000)
  }

  const store = {
    alerts,
    addAlert
  }

  return (
    <AlertsContext.Provider value={store}>
      {props.children}
    </AlertsContext.Provider>
  )
}