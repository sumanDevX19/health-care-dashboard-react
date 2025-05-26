import React from 'react'
import '../DashboardMainComponent.css'
import DashboardOverview from './DashboardOverview'
import CalendarView from './CalenderView'
import UpcomingSchedule from './UpcomingSchedule'
import ActivityFeed from './ActivityFeed'



const DashboardMainComponent = () => {
  return (
    <>  
    <div className="dashboard-main">

        <div className='dashboard-main-components'>
        <DashboardOverview/>
        <CalendarView/>

        </div>
        <div className='dashboard-second-components'>
          <ActivityFeed/>
          <UpcomingSchedule/>


        </div>
    </div>

    </>
  )
}

export default DashboardMainComponent