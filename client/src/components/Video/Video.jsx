import React from 'react'
import videoBG from '../../assets/backgroundApp.mp4'

const Main = () => {
  return (
    <div className='main'>
       <video autoPlay loop muted playsInline id='video'>
        <source src={videoBG} type='video/mp4' />
       </video>

    </div>
  )
}

export default Main