import React from 'react'
import '../SimpleAppointmentCard.css'

const SimpleAppointmentCard = ({title,icon,time}) => {
  return (
    <>
        <div className='card-container'>
            <div className="heading-div">
                <span>{title}</span>
                <span>{icon}</span>
            </div>
            <div className="time-div">
                <span>{time}</span>
            </div>

        </div>
    </>
  )
}

export default SimpleAppointmentCard