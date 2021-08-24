import React from 'react'
import { Carousel as ReactCarousel } from 'react-responsive-carousel'
import classnames from './Carousel.module.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

interface Props {
  photos: string[]
  name: string
}

export const Carousel = ({ photos, name }: Props) => {
  return (
    <ReactCarousel className={classnames.carousel} showStatus={false} showThumbs={false}>
      {photos.map((photo, index) => (
        <div className={classnames.carouselImage} key={index}>
          <img src={photo} alt={`${name} photo ${index}`} />
        </div>
      ))}
    </ReactCarousel>
  )
}
