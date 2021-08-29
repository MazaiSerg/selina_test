import React, { useMemo, useState } from 'react'
import classnames from './MainPage.module.css'
import { useLocationsQuery } from '../../api/useLocationsQuery'
import { pickRandomItems } from '../../helpers/pickRandomItems'
import { ImgLoader, Loader } from '../../components/layouts'

export const MainPage = () => {
  const [imgUrl, setImgUrl] = useState('')
  const locationsQuery = useLocationsQuery()
  const { data: locations, isLoading } = locationsQuery
  useMemo(
    function setImgUrlFirstTime() {
      if (locations && locations.length > 0) {
        const photos = pickRandomItems(locations)[0]?.photos ?? []
        setImgUrl(pickRandomItems(photos)[0] ?? '')
      }
    },
    [locations],
  )
  if (!imgUrl || isLoading) {
    return <Loader />
  }
  return (
    <div className={classnames.mainPageImageContainer}>
      <ImgLoader src={imgUrl} alt={'main image'} />
    </div>
  )
}
