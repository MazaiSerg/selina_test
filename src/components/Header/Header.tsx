import React from 'react'
import classnames from './Header.module.css'
import { Menu } from '../Menu/Menu'
import { useLocationsQuery } from '../../api/useLocationsQuery'

export const Header = () => {
  const locationsQuery = useLocationsQuery()
  const locations = locationsQuery.data ?? []
  return (
    <header className={classnames.header}>
      <div>logo</div>
      <Menu locations={locations} />
    </header>
  )
}
