import React, { useEffect, useState } from 'react'
import { Carousel as ReactCarousel } from 'react-responsive-carousel'
import classnames from './Carousel.module.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { ImgLoader } from '../layouts'

interface Props {
  photos: string[]
  name: string
}

export const Carousel = ({ photos, name }: Props) => {
  const [selectedItem, setSelectedItem] = useState(0)
  useEffect(
    function resetSelectedItem() {
      setSelectedItem(0)
    },
    [photos],
  )
  return (
    <ReactCarousel
      className={classnames.carousel}
      showStatus={false}
      showThumbs={false}
      selectedItem={selectedItem}
      onChange={(itemIndex) => setSelectedItem(itemIndex)}
    >
      {photos.map((photo, index) => (
        <div className={classnames.carouselImage} key={index}>
          <ImgLoader src={photo} alt={`${name} photo ${index}`} />
        </div>
      ))}
    </ReactCarousel>
  )
}
