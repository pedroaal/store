import { Accessor, Component, JSXElement, createContext, createSignal } from 'solid-js'

import { IModals } from '../types/modals'

interface IModalStore {
  current: Accessor<IModals|undefined>,
  open: (modal: IModals) => void,
  close: () => void,
}

interface IModalProviderProps {
  children: JSXElement
}

export const ModalContext = createContext<IModalStore>({
  current: () => undefined,
  open: (modal: IModals) => modal,
  close: () => {}
})

export const ModalProvider: Component<IModalProviderProps> = (props) => {
  const [current, setCurrent] = createSignal<IModals|undefined>(undefined)

  const open = (modal: IModals) => {
    setCurrent(modal)
  }

  const close = () => {
    setCurrent(undefined)
  }

  const store = {
    current,
    open,
    close
  }

  return (
    <ModalContext.Provider value={store}>
      {props.children}
    </ModalContext.Provider>
  )
}