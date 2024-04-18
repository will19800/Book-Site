import React from 'react'
import './Loader.css'
import Lottie from 'lottie-react'
import penguin from '../../images/catscafe-penguin.gif'
import loading from '../../images/loadinganimation.json'

const Loader = () => {
  return (
    <div className='flex justify-center items-center min-h-screen' >
      <Lottie animationData={loading} />
    </div>
    
  )
}

export default Loader