import { useQuery } from 'react-query'
import { EVENT_API } from './apiConfig'
import { SelinaEvent } from './dto/SelinaEvent'

export function useEventsQuery(id: string) {
  return useQuery<SelinaEvent[]>(`event_${id}`, () =>
    fetch(`${EVENT_API(id)}`).then((res) => res.json()),
  )
}
