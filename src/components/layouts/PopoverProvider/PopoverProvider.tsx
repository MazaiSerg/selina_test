import React, { useState } from 'react'
import classnames from './PopoverProvider.module.css'
import { Popover } from 'react-tiny-popover'

interface Props {
  children: React.ReactNode
  content: React.ReactNode
}

export const PopoverProvider = ({ children, content }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Popover
      isOpen={isOpen}
      reposition={false}
      content={<div className={classnames.popover}>{content}</div>}
    >
      <div
        className={classnames.popoverProvider}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {children}
      </div>
    </Popover>
  )
}
