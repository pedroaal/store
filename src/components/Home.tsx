import { Component, createResource, For } from 'solid-js'

import { getProducts } from '../services/product.service'

import { Product } from './Product'
import { Banner } from './Banner'
import Main from '../layouts/Main'
import { Cart } from '../modals/Cart'

const Home: Component = () => {
  const [products] = createResource(getProducts)
  
  return (
    <Main>
      <Banner />
      <Main.Section>
        <Cart />
        <div class='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid-flow-row gap-4'>
          <For each={products()}>
            {(product) => <Product {...product} />}
          </For>
        </div>
      </Main.Section>
    </Main>
  )
}

export default Home