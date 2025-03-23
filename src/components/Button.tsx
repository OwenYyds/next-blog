import React from 'react'

import { Button as FlowbiteButton } from 'flowbite-react'

interface ButtonProps {
  className?: string
  name: string
  onClick?:
    | (() => void)
    | ((event: React.MouseEvent<HTMLButtonElement>) => void)
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
  const { name, icon, duoTone, className, onClick } = props

  return (
    <FlowbiteButton
      className={className}
      onClick={onClick}
      gradientDuoTone={duoTone || 'purpleToBlue'}
    >
      {icon}
      {name}
    </FlowbiteButton>
  )
}
