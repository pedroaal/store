import type { Component } from 'solid-js'

import { CartProvider } from './store/Cart'
import { ModalProvider } from './store/Modal'
import { Alerts } from './components/Alerts'
import { AlertsProvider } from './store/Alerts'

import Home from './components/Home'

const App: Component = () => {
  return (
    <ModalProvider>
      <AlertsProvider>
        <CartProvider>
          <Home />
          <Alerts />
        </CartProvider>
      </AlertsProvider>
    </ModalProvider>
  )
}

export default App
