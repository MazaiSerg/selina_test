import React from 'react'
import classnames from './LocationDescription.module.css'
import { SelinaLocation, DirectionType } from '../../api/dto/SelinaLocation'
import { PopoverProvider } from '../layouts'
import plane from '../../icons/airplane.png'
import bus from '../../icons/bus.png'
import car from '../../icons/car-compact.png'

interface Props {
  location: SelinaLocation
}

const directionMapper = {
  [DirectionType.CAR]: car,
  [DirectionType.BUS]: bus,
  [DirectionType.PLANE]: plane,
}

export const LocationDescription = ({ location }: Props) => {
  return (
    <>
      <h2 className={classnames.locationName}>{location.name}</h2>
      <p className={classnames.locationDescription}>{location.description}</p>
      <div className={classnames.locationDirections}>
        {location.directions.map((direction, index) => {
          return (
            <div key={index} className={classnames.locationDirectionsItem}>
              <img src={directionMapper[direction.type]} alt={direction.label} />
              <p>{direction.value}</p>
            </div>
          )
        })}
      </div>
      <div className={classnames.locationFeatures}>
        {location.features.map((feature, index) => (
          <div key={index} className={classnames.locationFeature}>
            <PopoverProvider content={feature.label}>
              <img src={feature.image} alt={feature.label} />
            </PopoverProvider>
          </div>
        ))}
      </div>
      <p className={classnames.locationDescription}>
        phone: {location.contact.phones}
        <br />
        email: {location.contact.email}
        <br />
        website: <a href={location.contact.website}> {location.contact.website}</a>
        <br />
      </p>
    </>
  )
}
