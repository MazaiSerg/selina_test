import React, { useState } from 'react'
import classnames from './ImgLoader.module.css'
import clsx from 'clsx'

interface Props {
  src: string
  alt: string
  className?: string
  loading?: 'eager' | 'lazy'
}

export const ImgLoader = ({ src, alt, className, loading }: Props) => {
  const [loaded, setLoaded] = useState(false)

  const onLoad = () => {
    setLoaded(true)
  }

  return (
    <img
      src={src}
      alt={alt}
      onLoad={onLoad}
      loading={loading}
      className={clsx(className, { [classnames.notLoaded]: !loaded && src })}
    />
  )
}
