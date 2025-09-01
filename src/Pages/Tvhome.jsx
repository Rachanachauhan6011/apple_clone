import React from 'react'
import TvhomeProduct1 from './TvhomeProduct1'
import TvhomeProduct2 from './TvhomeProduct2'
import TvhomeProduct3 from './TvhomeProduct3'
import TvhomeProduct4 from './TvhomeProduct4'

const Tvhome = () => {
  return (
    <div className='h-auto w-full items-center justify-center bg-gray-100'>
        <div className=' h-auto text-center mx-40'>
      <img src="https://www.apple.com/v/tv-home/o/images/overview/hero__dbphk49ymi2q_large_2x.jpg" alt="" className='h-100 w-230 text-center pl-40'/>
      <h1 className='text-7xl font-bold '>The future hits home.</h1>
      <h1 className='text-4xl text-gray-500 font-semibold'>Simply connect your favorite devices and transform your house into a remarkably smart, convenient, and entertaining home. Elevate movie night with theater-like picture and sound. Play any song, in any room, from anywhere. And control lights, locks, and thermostats using Siri. All with the security and privacy of Apple.</h1>
        </div>
        <div>
            <TvhomeProduct1/>
            <TvhomeProduct2/>
            <TvhomeProduct3/>
        </div>
           <div className='h-auto w-full items-center justify-center bg-white mt-10'>
          <h1 className='text-7xl font-bold text-center pt-3'>Watch, sing and play.</h1>
          <h1 className='text-7xl font-bold text-center pb-3'>On the big screen.</h1>
        <div className='h-auto w-auto px-5 rounded-2xl items-center justify-center pt-10'>
          <video className='h-auto max-w-3/4 ml-60 border-4 border-black shadow-lg' src="https://www.apple.com/105/media/ww/tv-home/2024/ed6b1c3a-5550-4218-9c96-e11a46281591/anim/services/geo-alt-04/large_2x.mp4"
            autoPlay
            loop
            muted
            playsInline
            controls
          ></video>
        </div>
      </div>
      <div>
        <TvhomeProduct4/>
      </div>
    </div>
  )
}

export default Tvhome