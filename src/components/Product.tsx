import { Component, useContext } from 'solid-js'

import { IProduct } from '../types/product'
import { CartContext } from '../store/Cart'
import { ALERT_TYPE } from '../constants/alerts'
import { AlertsContext } from '../store/Alerts'

export const Product: Component<IProduct> = (props) => {
  const { title, price, thumbnail } = props
  const { addToCart } = useContext(CartContext)
  const { addAlert } = useContext(AlertsContext)

  const handleProduct = () => {
    addToCart(props)
    addAlert({
      id: Date.now(),
      title: 'Producto agregado',
      message: `${title} agregado al carrito`,
      type: ALERT_TYPE.SUCCESS
    })
  }

  return (
    <div class='border border-gray rounded-lg p-4 flex flex-col items-center gap-2'>
      <h5>{title}</h5>
      <div class='grow flex'>
        <img src={thumbnail} alt={title} />
      </div>
      <h5>${price}</h5>
      <button class='px-4 py-2 bg-black text-white rounded' onClick={handleProduct}>Agregar al carrito</button>
    </div>
  )
}