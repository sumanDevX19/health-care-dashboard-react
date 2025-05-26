import React from 'react'
import '../ActivityFeed.css'

const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']

const ActivityFeed = () => {
  return (
    <div className="activity-feed-wrapper">
      <div className="activity-feed-header">
        <h4>Activity</h4>
        <p className="appointment-count">3 appointments on this week</p>
      </div>
      <div className="chart-container">
        {days.map((day, i) => (
          <div className="day-column" key={i}>
            <div className="bars">
              <div className="bar gray"></div>
              <div className="bar aqua"></div>
              <div className="bar blue"></div>
            </div>
            <span className="day-label">{day}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ActivityFeed
