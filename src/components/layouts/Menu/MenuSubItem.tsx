import React from 'react'
import { Link } from 'react-router-dom'
import { SelinaLocation } from '../../../api/dto/SelinaLocation'
import classnames from './Menu.module.css'

export const MenuSubItem = (location: SelinaLocation) => {
  return (
    <Link key={location.id} to={`/location/${location.name}`}>
      <div className={classnames.subMenuItem}>{location.name}</div>
    </Link>
  )
}
