import { useQuery } from 'react-query'
import { LOCATION_API } from './apiConfig'
import { SelinaLocation } from './dto/SelinaLocation'

export function useLocationsQuery() {
  return useQuery<SelinaLocation[]>('locations', () =>
    fetch(`${LOCATION_API}`).then((res) => res.json()),
  )
}
