import type { Component } from 'solid-js'

import Main from './layouts/Main'
import Home from './components/Home'

const App: Component = () => {
  return (
    <Main>
      <Home />
    </Main>
  )
}

export default App
