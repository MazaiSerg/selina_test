import React, { useState } from 'react'
import { SelenaLocation } from '../../api/dto/SelenaLocation'
import classnames from './Menu.module.css'
import { MenuSubItem } from './MenuSubItem'

interface Props {
  country: string
  locations: SelenaLocation[]
}

export const MenuItem = ({ country, locations }: Props) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <div
      className={classnames.menuItem}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div>{country}</div>
      <div className={classnames.subMenu}>{isHover && locations.map(MenuSubItem)}</div>
    </div>
  )
}
