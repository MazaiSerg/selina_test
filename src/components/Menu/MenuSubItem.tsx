import { SelenaLocation } from '../../api/dto/SelenaLocation'
import classnames from './Menu.module.css'
import React from 'react'

export const MenuSubItem = (location: SelenaLocation) => {
  return (
    <div key={location.id} className={classnames.subMenuItem}>
      {location.name}
    </div>
  )
}
