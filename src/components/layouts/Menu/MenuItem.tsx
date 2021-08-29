import React, { useState } from 'react'
import { SelinaLocation } from '../../../api/dto/SelinaLocation'
import classnames from './Menu.module.css'
import { MenuSubItem } from './MenuSubItem'

interface Props {
  country: string
  locations: SelinaLocation[]
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
