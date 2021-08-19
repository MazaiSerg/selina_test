import { useQuery } from 'react-query'
import { LOCATION_API } from './apiConfig'
import { SelenaLocation } from './dto/SelenaLocation'

export function useLocationsQuery() {
  return useQuery<SelenaLocation[]>('locations', () =>
    fetch(`${LOCATION_API}`).then((res) => res.json()),
  )
}
