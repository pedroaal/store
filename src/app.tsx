import type { Component } from 'solid-js'

import { CartProvider } from './store/cart'

import Home from './components/Home'

const App: Component = () => {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  )
}

export default App
