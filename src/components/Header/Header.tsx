import React from 'react'
import classnames from './Header.module.css'
import { ImgLoader, Menu } from '../layouts'
import { useLocationsQuery } from '../../api/useLocationsQuery'
import { Link } from 'react-router-dom'
import logo from '../../icons/selina_logo.svg'

export const Header = () => {
  const locationsQuery = useLocationsQuery()
  const locations = locationsQuery.data ?? []
  return (
    <header className={classnames.header}>
      <Link to="/">
        <ImgLoader src={logo} alt="logo" className={classnames.logo} />
      </Link>
      <Menu locations={locations} />
    </header>
  )
}
