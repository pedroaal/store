import { createContext } from 'solid-js'
import { createStore } from 'solid-js/store'

import { ICartProduct, IProduct } from '../types/product'

export const CartContext = createContext({ cart: { products: [], total: 0 }, add: (product: IProduct) => null })

export function CartProvider(props) {
  const [cart, setCart] = createStore({ products: [], total: 0 })

  const store = {
    cart,
    add: (newProduct: ICartProduct) => {
      setCart('products', (oldState: ICartProduct[]) => {
        const oldProduct = oldState.find((product) => product.id === newProduct.id)

        if (oldProduct) {
          return oldState.map((product) => {
            if (product.id === newProduct.id) {
              return { ...product, quantity: product.quantity + 1 }
            }
            return product
          })
        }
        
        return [...oldState, newProduct]
      })
      const total = cart.products.reduce((acc, product) => acc + (product.price * product.quantity), 0)
      setCart('total', () => total)
    },
  }

  return (
    <CartContext.Provider value={store}>
      {props.children}
    </CartContext.Provider>
  )
}