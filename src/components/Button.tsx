import React from 'react'

import { Button as FlowbiteButton } from 'flowbite-react'

interface ButtonProps {
  className?: string
  name: string
  icon?: React.ReactNode
  duoTone?:
    | 'purpleToBlue'
    | 'cyanToBlue'
    | 'greenToBlue'
    | 'purpleToPink'
    | 'pinkToOrange'
    | 'tealToLime'
    | 'redToYellow'
}

export default function Button(props: ButtonProps) {
  const { name, icon, duoTone, className } = props

  return (
    <FlowbiteButton
      className={className}
      gradientDuoTone={duoTone || 'purpleToBlue'}
    >
      {icon}
      {name}
    </FlowbiteButton>
  )
}
