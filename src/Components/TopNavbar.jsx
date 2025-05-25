import React from 'react'
import '../TopNavbar.css'

const TopNavbar = () => {

  
  
  
  const menuHandler = (e)=>{
    e.preventDefault()
    const nav = document.querySelector('#mobile-toggle-menu');

    if(nav){
      nav?.classList.toggle('hidden')
    }

  }
  return (
    <>
      <div className='nav-container'>
        {/* Right Section */}
        <div className='right-section'>
            <a className='logo-link' href="#"><span className='logo1'>Health</span><span className='logo2'>care.</span></a>
            <div className='search-bar'>
            <a href="#" style={{width:'48px', height:'48px'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="search-icon lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
            </a>
            <input type="text" placeholder='Search' className='search-box' />
            <a href="#" style={{width:'48px', height:'48px'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="search-icon lucide lucide-bell-icon lucide-bell"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/></svg>
            </a>
            </div>
        </div>
        {/* Left Section */}
        <div className='left-section'>
            <div className='profile-box'>
                <a href="" >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" style={{color:'#fff'}} height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-user-round-icon lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>
                </a>
            </div>
            <div className='add-box'>
                <a href="" >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" style={{color:'#fff'}} height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                </a>
            </div>
        </div>
        {/* Mobile Menu */}
        <div className='mobile-menu' id='toggle' onClick={menuHandler}>
            
                <div className='menu-box'>
                <a href="" style={{height:'24px', width:'24px'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3127be" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu-icon lucide-menu"><path d="M4 12h16"/><path d="M4 18h16"/><path d="M4 6h16"/></svg>
                </a>
                </div>
                
            

        </div>
    </div>
    <div id='mobile-toggle-menu' className='hidden'>
       <div className='mobile-menu-back'>
                        <ul>
                            <li>
                                <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3127be" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-dashboard-icon lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
                                <span>
                                Dashboard
                                </span>
                                </a>
                            </li>
                            <li className='my-2'>
                                <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3127be" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-history-icon lucide-history"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg>
                                <span>
                                History
                                </span>
                                </a>
                            </li>
                            <li className='my-2'>
                                <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3127be" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days-icon lucide-calendar-days"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
                                <span>
                                Calender
                                </span>
                                </a>
                            </li>
                            <li className='my-2'>
                                <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3127be" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-plus-icon lucide-clipboard-plus"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 14h6"/><path d="M12 17v-6"/></svg>
                                <span>
                                Appointments
                                </span>
                                </a>
                            </li>
                            <li className='my-2'>
                                <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3127be" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-chart-column-increasing-icon lucide-file-chart-column-increasing"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M8 18v-2"/><path d="M12 18v-4"/><path d="M16 18v-6"/></svg>
                                <span>
                                Statistics
                                </span>
                                </a>
                            </li>
                            
                        </ul>
                        <br />

                        <ul>
                            <li className='my-2'>
                                <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3127be" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-more-icon lucide-message-circle-more"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/></svg>
                                <span>
                                Chat
                                </span>
                                </a>
                            </li>
                            <li className='my-2'>
                                <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3127be" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
                                <span>
                                Support
                                </span>
                                </a>
                            </li>

                        </ul>

                        <br />
                        <ul>
                            <li className='my-2'>
                                <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3127be" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings-icon lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                                <span>
                                Support
                                </span>
                                </a>
                            </li>
                            
                        </ul>

                    </div>

    </div>
    </>
  )
}

export default TopNavbar