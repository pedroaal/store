import { HiSolidTrash } from 'solid-icons/hi'
import { Component, For, useContext } from 'solid-js'

import { CartContext } from '../store/Cart'
import { ModalContext } from '../store/Modal'
import { ICartProduct } from '../types/product'

import Modal from '../layouts/Modal'
import { MODALS } from '../constants/modals'

export const Detail: Component<ICartProduct> = (props) => {
  const {id, title, thumbnail, price, quantity} = props
  const {removeProduct, increment, decrement} = useContext(CartContext)

  return (
    <div class='flex gap-2 items-center'>
      <div class='w-40'>
        <img src={thumbnail} alt={title} />
      </div>
      <div class='flex flex-col'>
        <h6>{title}</h6>
        <p>{price}</p>
        <div class='flex gap-2'>
          <button onClick={() => decrement(id)}>-</button>
          <p>{quantity}</p>
          <button onClick={() => increment(id)}>+</button>
        </div>
      </div>
      <HiSolidTrash class='w-6 h-6' onClick={() => removeProduct(id)} />
    </div>
  )
}

export const Cart: Component = () => {
  const { cart } = useContext(CartContext)
  const { current } = useContext(ModalContext)

  return (
    <Modal isOpen={current() === MODALS.CART}>
      <div class='my-4 p-4 border border-gray-200 rounded-lg bg-white'>
        <For each={cart.products}>
          {(product) => <Detail {...product} />}
        </For>
        <div>
          <p>Total: {cart.total}</p>
          <button class='bg-black text-white px-4 py-2 rounded'>Pagar</button>
        </div>
      </div>
    </Modal>
  )
}