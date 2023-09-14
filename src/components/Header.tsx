import { Component } from 'solid-js'
import { HiSolidShoppingBag } from 'solid-icons/hi'

export const Header: Component = () => {
  return (
    <header class='w-full p-4 bg-transparent absolute text-white flex justify-between'>
      <h4>Store</h4>
      <div>
        <HiSolidShoppingBag class='w-8 h-8' />
      </div>
    </header>
  )
}