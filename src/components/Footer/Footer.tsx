import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import classnames from './Footer.module.css'
import { useLocationsQuery } from '../../api/useLocationsQuery'
import { pickRandomItems } from '../../helpers/pickRandomItems'
import { ImgLoader } from '../layouts'

type PickedLocation = {
  name: string
  imgUrl: string
}

const IMAGES_COUNT = 3

export const Footer = () => {
  const [pickedLocations, setPikedLocations] = useState<PickedLocation[]>([])
  const locationsQuery = useLocationsQuery()
  const { data: locations } = locationsQuery
  useMemo(
    function setImgUrlFirstTime() {
      if (locations && locations.length > 0) {
        const newPickedLocations = pickRandomItems(locations, IMAGES_COUNT).map(
          (location): PickedLocation => {
            return {
              name: location.name,
              imgUrl: pickRandomItems(location.photos)[0],
            }
          },
        )
        setPikedLocations(newPickedLocations)
      }
    },
    [locations],
  )
  return (
    <footer className={classnames.footer}>
      {pickedLocations.map((location, index) => {
        return (
          <div key={index} className={classnames.footerPageImageContainer}>
            <Link to={`/location/${location.name}`}>
              <ImgLoader src={location.imgUrl} alt={location.name} />
            </Link>
          </div>
        )
      })}
    </footer>
  )
}
