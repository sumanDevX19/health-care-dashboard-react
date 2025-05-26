import React from 'react'
import AnatomySection from './AnatomySection'
import '../DashboardOverview.css'
import HealthStatusCards from './HealthStatusCards'
import CalendarView from './CalenderView'

const DashboardOverview = () => {
  return (
        <>
          <div className='dashboard-overview' >
            <AnatomySection/>
            <HealthStatusCards/>
            <CalendarView/>

          </div>
        </>
  )
}

export default DashboardOverview