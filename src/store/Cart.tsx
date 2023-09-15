import { JSXElement, createContext } from 'solid-js'
import { createStore } from 'solid-js/store'

import { ICartProduct, IProduct } from '../types/product'

interface IProps {
  children: JSXElement
}

interface ICartStore {
  cart: { products:[], total: number },
  addToCart: (product: IProduct) => void,
  removeProduct: (id: number) => void,
  increment: (id: number) => void,
  decrement: (id: number) => void
}

export const CartContext = createContext<ICartStore>({
  cart: { products:[], total: 0 },
  addToCart: () => {},
  removeProduct: () => {},
  increment: () => {},
  decrement: () => {}
})

export const CartProvider = (props: IProps) => {
  const [cart, setCart] = createStore({ products: [], total: 0 })

  const calculatTotal = () => {
    const total = cart.products.reduce((acc, product) => acc + (product.price * product.quantity), 0)

    setCart('total', Number(total.toFixed(2)))
  }

  const addToCart =  (newProduct: IProduct) => {
    const oldProduct = cart.products.find((product) => product.id === newProduct.id)

    if (oldProduct) {
      return
    }
      
    setCart('products', (oldState: ICartProduct[]) => {
      return [...oldState, {...newProduct, quantity: 1}]
    })

    calculatTotal()
  }

  const removeProduct = (id: number) => {
    setCart('products', (oldState: ICartProduct[]) => {
      return oldState.filter((product) => product.id !== id)
    })

    calculatTotal()
  }

  const increment = (id: number) => {
    setCart('products', (oldState: ICartProduct[]) => {
      return oldState.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity + 1 }
        }
        return product
      })
    })

    calculatTotal()
  }

  const decrement = (id: number) => {
    const oldProduct = cart.products.find((product) => product.id === id)

    if(oldProduct?.quantity === 1) {
      return removeProduct(id)
    }

    setCart('products', (oldState: ICartProduct[]) => {
      return oldState.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity - 1 }
        }
        return product
      })
    })

    calculatTotal()
  }

  const store = {
    cart,
    addToCart,
    removeProduct,
    increment,
    decrement
  }

  return (
    <CartContext.Provider value={store}>
      {props.children}
    </CartContext.Provider>
  )
}