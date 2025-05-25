import React from 'react'
import '../AnatomySection.css'
import anatomy from '../assets/anatomy.png'

const AnatomySection = () => {
  return (
    <div className='anatomy-container'>
        <div className='anatomy-div'>
            <img src={anatomy} alt="" />
            

        </div>
        {/* Lungs Pointer  */}
        <div className='lungs-pointer'>
          <div className='lungs-content'>
            <span>Healthy Lungs</span>

          </div>
        </div>

        {/* Tooth Pointer  */}
        <div className='tooth-pointer'>
          <div className='tooth-content'>
            <span>Healthy Tooth</span>

          </div>
        </div>

        {/* Bones Pointer  */}
        <div className='bone-pointer'>
          <div className='bone-content'>
            <span>Healthy Bones</span>

          </div>
        </div>


    </div>
  )
}

export default AnatomySection