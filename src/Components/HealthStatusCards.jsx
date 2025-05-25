import React from 'react'
import '../HealthStatusCards.css'
import lungs from '../assets/lungs.svg'
import tooth from '../assets/tooth.svg'
import bone from '../assets/bone.svg'

const HealthStatusCards = () => {
  return (
    <>
        <div className='health-cards-container'>
            <div className='card'>
                <div className='organ'>
                    <img src={lungs} alt="" />
                    <span>Lungs</span>
                </div>
                <div className='date'>
                    <span>Date: 25/05/2025</span>

                </div>
                <div className='progress'>
                    <div className='layer-outer'>
                        <div className='lungs-progress'>

                        </div>
                    </div>

                </div>

            </div>
            <div className='card'>
                <div className='organ'>
                    <img src={tooth} alt="" />
                    <span>Teeth</span>
                </div>
                <div className='date'>
                    <span>Date: 25/05/2025</span>

                </div>
                <div className='progress'>
                    <div className='layer-outer'>
                        <div className='teeth-progress'>

                        </div>
                    </div>

                </div>

            </div>
            <div className='card'>
                <div className='organ'>
                    <img src={bone} alt="" />
                    <span>Bone</span>
                </div>
                <div className='date'>
                    <span>Date: 25/05/2025</span>

                </div>
                <div className='progress'>
                    <div className='layer-outer'>
                        <div className='bone-progress'>

                        </div>
                    </div>

                </div>

            </div>
            
            <button className='details-btn'>Details &#8594;</button>

        </div>
    </>
  )
}

export default HealthStatusCards