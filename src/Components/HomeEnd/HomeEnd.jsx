import React from 'react'
import './homeEnd.css'
import union from '../../Images/img_union.png'
import CustomAccordionItem from '../CustomAccordion/CustomAccordion'

const HomeEnd = () => {
  return (
    <div className='homeEnd'>
      <div className='row g-0'>
        <div className='col-md-6'>
          <div className='raiseQuestion'>
            <div> What’s on your mind</div>
            <div>Ask Questions</div>
          </div>
        </div>
        <div className='col-md-6'>
          <div className=''>
            <CustomAccordionItem />
            <CustomAccordionItem />
          </div>
        </div>
        <img
          src={union}
          alt='union'
          className='union'
        />
      </div>
    </div>
  )
}

export default HomeEnd
