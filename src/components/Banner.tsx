import { Component } from 'solid-js'

import Image from '../assets/banner.gif'

export const Banner: Component = () => {
  return (
    <div>
      <img src={Image} alt="banner" />
    </div>
  )
}