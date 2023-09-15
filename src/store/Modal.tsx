import { Accessor, JSXElement, createContext, createSignal } from 'solid-js'

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

export function ModalProvider(props: IProps) {
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