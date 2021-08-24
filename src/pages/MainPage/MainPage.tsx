import React, { useMemo, useState } from 'react'
import classnames from './MainPage.module.css'
import { useLocationsQuery } from '../../api/useLocationsQuery'
import { pickRandomItems } from '../../helpers/pickRandomItems'

export const MainPage = () => {
  const [imgUrl, setImgUrl] = useState('')
  const locationsQuery = useLocationsQuery()
  const { data: locations } = locationsQuery
  useMemo(
    function setImgUrlFirstTime() {
      if (locations && locations.length > 0) {
        const photos = pickRandomItems(locations)[0]?.photos ?? []
        setImgUrl(pickRandomItems(photos)[0] ?? '')
      }
    },
    [locations],
  )
  return (
    <div className={classnames.mainPageImageContainer}>
      <img src={imgUrl} alt={'main image'} />
    </div>
  )
}
