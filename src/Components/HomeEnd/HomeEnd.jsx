import React from 'react'
import './homeEnd.css'
import union from '../../Images/img_union.png'
import CustomAccordionItem from '../CustomAccordion/CustomAccordion'

const HomeEnd = () => {

  const accords = [
    {
      title: 'Do you offer freelancers?',
      content: 'If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.'
    },
    {
      title: "What’s the guarantee that I will be satisfied with the hired talent?",
      content: 'If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.'
    },
    {
      title: 'Can I hire multiple talents at once?',
      content: 'If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.'
    },
    {
      title: 'Why should I not go to an agency directly?',
      content: 'If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.'
    },
    {
      title: 'Who can help me pick a right skillset and duration for me?',
      content: 'If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.'
    },
  ]
  return (
    <div className='homeEnd'>
      <div className='row g-0'>
        <div className='col-md-5 raiseQuestionDiv'>
          <div className='raiseQuestion'>
            <div className='mindQuestion'> What’s on your mind</div>
            <div className='askQuestions'>Ask Questions</div>
          </div>
        </div>
        <div className='col-md-7'>
          <div className='allAccords'>
            { accords && (
              accords.map((one, index) => {
                return <CustomAccordionItem key={index} title={one.title} content={one.content} />
              })
            ) }
          </div>
        </div>
      </div>
      <img
        src={union}
        alt='union'
        className='union'
      />
    </div>
  )
}

export default HomeEnd
