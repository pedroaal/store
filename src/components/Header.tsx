import { Component, useContext } from 'solid-js'
import { HiSolidShoppingBag } from 'solid-icons/hi'

import { CartContext } from '../store/cart'
import { MODALS } from '../constants/modals'
import { ModalContext } from '../store/Modal'

import Badge from './Badge'

export const Header: Component = () => {
  const { cart } = useContext(CartContext)
  const { open } = useContext(ModalContext)

  return (
    <header class='w-full p-4 bg-transparent absolute text-white flex justify-between'>
      <h4>Store</h4>
      <div>
        <div class='relative' onClick={() => open(MODALS.CART)}>
          <HiSolidShoppingBag class='w-8 h-8' />
          <Badge count={cart.products.length} />
        </div>
      </div>
    </header>
  )
}