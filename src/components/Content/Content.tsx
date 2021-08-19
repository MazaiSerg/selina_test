import React from 'react'

interface Props {
  children: React.ReactNode
}

export const Content = ({ children }: Props) => {
  return <div>{children}</div>
}
