import React, { useMemo, useState } from 'react'
import classnames from './Menu.module.css'
import { MenuItem } from './MenuItem'
import { SelinaLocation } from '../../../api/dto/SelinaLocation'
import { uniq } from '../../../helpers/uniq'

interface Props {
  locations: SelinaLocation[]
}

export const Menu = ({ locations }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const cities = useMemo(
    () => uniq(locations.map((location) => location.location.value)),
    [locations],
  )
  return (
    <div
      className={classnames.transformForFixedChildren}
      onMouseEnter={() => setIsMenuOpen(true)}
      onMouseLeave={() => setIsMenuOpen(false)}
    >
      <div>Locations</div>
      {isMenuOpen && (
        <div className={classnames.menu}>
          {cities.map((city, index) => {
            return (
              <MenuItem
                key={index}
                country={city}
                locations={locations.filter((location) => location.location.value === city)}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
