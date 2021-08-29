import React from 'react'
import LoaderSpinner from 'react-loader-spinner'
import classnames from './Loader.module.css'

export const Loader = () => {
  return (
    <div className={classnames.loader}>
      <LoaderSpinner type="TailSpin" visible={true} color="323232" />
    </div>
  )
}
