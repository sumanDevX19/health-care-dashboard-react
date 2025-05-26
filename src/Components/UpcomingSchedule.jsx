import React from 'react'
import '../UpcomingSchedule.css'
import {upcommingTuesday,upcommingSaturday} from '../data/UpcomingSheduleData'
import SimpleAppointmentCard from '../Components/SimpleAppointmentCard'


const UpcomingSchedule = () => {
  return (
    <>
    <div className="upcoming-schedule-container">
        <h2>The Upcoming Schedule</h2>
        <div>
            <h4>On Thursday</h4>
            <div className='work'>
                
                {upcommingTuesday.map((task,idx)=>{
                    return <SimpleAppointmentCard key={idx} title={task.title} icon={task.icon} time={task.time}/>
                })}
            </div>
            <h4>On Saturday</h4>
            <div className='work'>
                
                {upcommingSaturday.map((task,idx)=>{
                    return <SimpleAppointmentCard key={idx} title={task.title} icon={task.icon} time={task.time}/>
                })}
            </div>
        </div>

    </div>
    
    </>
  )
}

export default UpcomingSchedule