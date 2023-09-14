import { Component } from 'solid-js'

import { IProduct } from '../types/product'

interface ProductProps extends IProduct {}

export const Product: Component<ProductProps> = props => {
  const { title, price, thumbnail } = props

  return (
    <div class='border border-gray rounded-lg p-4 flex flex-col items-center gap-2'>
      <h5>{title}</h5>
      <div class='grow flex'>
        <img src={thumbnail} alt={title} />
      </div>
      <h5>${price}</h5>
      <button class='px-4 py-2 bg-black text-white rounded'>Agregar al carrito</button>
    </div>
  )
}