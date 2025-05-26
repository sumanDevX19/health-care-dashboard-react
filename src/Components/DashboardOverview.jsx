import React from 'react'
import AnatomySection from './AnatomySection'
import '../DashboardOverview.css'
import HealthStatusCards from './HealthStatusCards'


const DashboardOverview = () => {
  return (
        <>
          <div className='dashboard-overview' >
            <AnatomySection/>
            <HealthStatusCards/>


          </div>
        </>
  )
}

export default DashboardOverview