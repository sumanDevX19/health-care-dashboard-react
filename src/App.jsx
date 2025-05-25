import React from 'react'
import './App.css'
import TopNavbar from './Components/TopNavbar'
import SideBar from './Components/SideBar'
import DashboardMainComponent from './Components/DashboardMainComponent'

const App  = () => {
  return (
    <>
    <TopNavbar/>
    <div style={{display:'flex'}}>
    <SideBar/>
    <DashboardMainComponent/>
    </div>
    </>
  )
}

export default App 