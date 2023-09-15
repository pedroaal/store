import { HiSolidXMark } from 'solid-icons/hi'
import { Component, JSXElement, Show, useContext } from 'solid-js'

import { ModalContext } from '../store/Modal'

interface IModalProps {
  children: JSXElement
  isOpen: boolean
}

const Modal: Component<IModalProps> = (props) => {
  const { close } = useContext(ModalContext)

  return (
    <Show when={props.isOpen}>
      <div class='absolute top-0 left-0 w-screen h-screen bg-gray-800/50'>
        <HiSolidXMark class='absolute top-4 right-4 w-10 h-10 text-white' onClick={close} />
        <div class="container m-auto py-8">
          {props.children}
        </div>
      </div>
    </Show>
  )
}

export default Modal