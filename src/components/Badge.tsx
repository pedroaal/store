import { Component } from 'solid-js'

interface IBadgeProps {
  count: number
}

const Badge: Component<IBadgeProps> = (props) => {
  return (
    <div class='absolute -top-1.5 -left-1.5'>
      <span class='bg-gray-600 p-1.5 rounded-full text-xs'>
        {props.count}
      </span>
    </div>
  )
}

export default Badge