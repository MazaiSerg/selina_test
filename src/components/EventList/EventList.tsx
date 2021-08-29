import React, { useMemo, useState } from 'react'
import { useEventsQuery } from '../../api/useEventsQuery'
import classnames from './EventList.module.css'
import { Event } from './Event'
import { DatePicker, DatePickerValueType, Loader } from '../layouts'
import { addFewDays } from '../../helpers/addFewDays'

interface Props {
  locationId: string
}

export const EventList = ({ locationId }: Props) => {
  const { data: events, isLoading } = useEventsQuery(locationId)
  const [eventDates, setEventDates] = useState<DatePickerValueType>(null)

  const eventWithDates = useMemo(
    function parsEventsDate() {
      return events?.map((event) => {
        return {
          ...event,
          startDateAsDate: new Date(event.startDate),
          endDateAsDate: new Date(event.endDate),
        }
      })
    },
    [events],
  )

  const eventsToShow = useMemo(
    function filterEventsByDate() {
      if (!eventDates || !eventWithDates) {
        return eventWithDates
      }
      const [startDate, endDate] = [
        eventDates[0],
        eventDates[1] ? addFewDays(eventDates[1], 1) : null,
      ]
      return eventWithDates
        .filter(function filterByStart(event) {
          return !startDate || startDate <= event.endDateAsDate
        })
        .filter(function filterByEnd(event) {
          return !endDate || endDate >= event.startDateAsDate
        })
    },
    [eventDates, eventWithDates],
  )

  if (isLoading) {
    return <Loader />
  }

  if (!events || events.length === 0) {
    return (
      <span
        className={classnames.eventNotFound}
      >{`Sorry, we don't have any information about events at this place :'(`}</span>
    )
  }

  return (
    <div>
      <h2 className={classnames.eventListHeader}>Event List</h2>
      <div className={classnames.eventList}>
        <DatePicker
          value={eventDates}
          onChange={setEventDates}
          className={classnames.eventListItem}
        />
        {!eventsToShow ? (
          <span
            className={classnames.eventNotFound}
          >{`Sorry, we don't have any information about events at this time:'(`}</span>
        ) : (
          eventsToShow.map((event) => {
            return (
              <div key={event.id} className={classnames.eventListItem}>
                <Event event={event} />
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
