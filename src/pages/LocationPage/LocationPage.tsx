import React, { useMemo } from 'react'
import { useParams } from 'react-router'
import classnames from './LocationPage.module.css'
import { useLocationsQuery } from '../../api/useLocationsQuery'
import { Carousel } from '../../components/Carousel/Carousel'

export const LocationPage = () => {
  const { name } = useParams<{ name: string }>()
  const { data: locations } = useLocationsQuery()
  const location = useMemo(
    function getLocationById() {
      if (locations) {
        return locations.find((location) => location.name === name)
      }
      return undefined
    },
    [locations, name],
  )
  if (!location) {
    return <div>Not found</div>
  }
  return (
    <div className={classnames.locationPage}>
      <div className={classnames.locationPageFlexItems}>
        <Carousel photos={location.photos} name={location.name} />
      </div>
      <div className={classnames.locationPageFlexItems}>
        <h2>{location.name}</h2>
        <p>{location.description}</p>
        <div>
          Features:
          {location.features.map((feature, index) => (
            <div key={index}>
              <img src={feature.image} alt={feature.label} />
            </div>
          ))}
        </div>
      </div>
      <div className={classnames.locationPageFlexItems}>events</div>
    </div>
  )
}
