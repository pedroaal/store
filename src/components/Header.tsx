import { Component, useContext } from 'solid-js'
import { HiSolidShoppingBag } from 'solid-icons/hi'

import { CartContext } from '../store/cart'
import Badge from './Badge'

export const Header: Component = () => {
  const { cart } = useContext(CartContext)

  return (
    <header class='w-full p-4 bg-transparent absolute text-white flex justify-between'>
      <h4>Store</h4>
      <div>
        <div class='relative'>
          <HiSolidShoppingBag class='w-8 h-8' />
          <Badge count={cart.products.length} />
        </div>
      </div>
    </header>
  )
}