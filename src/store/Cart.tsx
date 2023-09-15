import { Component, JSXElement, createContext } from 'solid-js'
import { createStore } from 'solid-js/store'

import { ICartProduct, IProduct } from '../types/product'

interface ICart {
  products: ICartProduct[]
  total: number
}

interface ICartStore {
  cart: ICart
  addToCart: (product: IProduct) => void
  removeProduct: (id: number) => void
  increment: (id: number) => void
  decrement: (id: number) => void
}

interface ICartProviderProps {
  children: JSXElement
}

export const CartContext = createContext<ICartStore>({
  cart: { products: [], total: 0 },
  addToCart: () => {},
  removeProduct: () => {},
  increment: () => {},
  decrement: () => {}
})

export const CartProvider: Component<ICartProviderProps> = (props) => {
  const [cart, setCart] = createStore<ICart>({ products: [], total: 0 })

  const getTotal = () => {
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

    getTotal()
  }

  const removeProduct = (id: number) => {
    setCart('products', (oldState: ICartProduct[]) => {
      return oldState.filter((product) => product.id !== id)
    })

    getTotal()
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

    getTotal()
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

    getTotal()
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