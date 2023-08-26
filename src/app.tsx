import type { Component } from 'solid-js'
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query'

import Tasks from './components/tasks'

const queryClient = new QueryClient()

const App: Component = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Tasks />
    </QueryClientProvider>
  )
}

export default App
