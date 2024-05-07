import React from 'react'
import './homeContent.css'
import HomeEnd from '../HomeEnd/HomeEnd'
import HomeToMid from '../HomeToMid/HomeToMid'

const HomeContent = () => {
  return (
    <div className='HomeContent'>
      <HomeToMid />
      <HomeEnd />
    </div>
  )
}

export default HomeContent
