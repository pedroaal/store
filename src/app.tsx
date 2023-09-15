import type { Component } from 'solid-js'

import { CartProvider } from './store/Cart'
import { ModalProvider } from './store/Modal'

import Home from './components/Home'

const App: Component = () => {
  return (
    <ModalProvider>
      <CartProvider>
        <Home />
      </CartProvider>
    </ModalProvider>
  )
}

export default App
