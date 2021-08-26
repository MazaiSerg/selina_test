import React from 'react'
import { SelinaEvent } from '../../api/dto/SelinaEvent'
import classnames from './EventList.module.css'

interface Props {
  event: SelinaEvent
}

export const Event = ({ event }: Props) => {
  return (
    <div className={classnames.event}>
      <div className={classnames.imageContainer}>
        <img src={event.images[0]} alt={`${event.name} image`} />
      </div>
      <h4>{event.name}</h4>
      <p>{event.description}</p>
      <div>Event start at {event.startDate}</div>
      <div>Event end at {event.endDate}</div>
      <div>{event.price > 0 ? `Price: ${event.price} ${event.currencyCode}` : 'Free enter'}</div>
    </div>
  )
}
