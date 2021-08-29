import React from 'react'
import classnames from './Content.module.css'

interface Props {
  children: React.ReactNode
}

export const Content = ({ children }: Props) => {
  return <div className={classnames.content}>{children}</div>
}
