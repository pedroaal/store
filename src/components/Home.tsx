import { Component, createResource, For } from 'solid-js'

import { getProducts } from '../services/product.service'

import { Product } from './Product'
import { Banner } from './Banner'
import Main from '../layouts/Main'

const Home: Component = () => {
  const [products] = createResource(getProducts)
  
  return (
    <Main>
      <Banner />
      <Main.Section>
        <div class='grid grid-cols-5 grid-flow-row gap-4'>
          <For each={products()}>
            {(product) => <Product {...product} />}
          </For>
        </div>
      </Main.Section>
    </Main>
  )
}

export default Home