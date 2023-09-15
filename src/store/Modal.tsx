import { Accessor, Component, JSXElement, createContext, createSignal } from 'solid-js'

import { IModals } from '../types/modals'

interface IStore {
  current: Accessor<IModals|undefined>,
  open: (modal: string) => void,
  close: () => void,
}

interface IProps {
  children: JSXElement
}

export const ModalContext = createContext<IStore>({
  current: () => undefined,
  open: () => {},
  close: () => {}
})

export const ModalProvider: Component<IProps> = (props) => {
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