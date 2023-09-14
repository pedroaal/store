import { Component, createResource, For } from 'solid-js'

import { getCategories } from '../services/categories.service'

const Home: Component = () => {
  const [categories] = createResource(getCategories)
  
  return (
    <>
      <div>Home</div>
      <ul>
        <For each={categories()}>{(category) => <li>{category.name}</li>}</For>
      </ul>
    </>
  )
}

export default Home