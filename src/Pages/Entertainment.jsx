import React from 'react'
import EntertainmentMarque from './EntertainmentMarque'
import EntertainmentMarque2 from './EntertainmentMarque2'
import EntertainmentMarque3 from './EntertainmentMarque3'

const Entertainment = () => {
  return (
    <div className='h-auto w-full items-center justify-center bg-white'>
      <div className='h-auto w-full items-center justify-center text-center bg-black text-white'>
        <h1 className='text-7xl font-bold text-center pt-20'>Meet the A-list of</h1>
        <h1 className='text-7xl font-bold text-center'>entertainment.</h1>
        <p className='text-2xl font-bold text-center pt-4'>Award‑winning movies. Binge‑worthy shows. Your favourite music mastered in</p>
        <p className='text-2xl font-bold text-center '>Spatial Audio. And the most epic collection of mobile games. The best</p>
        <p className='text-2xl font-bold text-center '>entertainment and experiences live here — only on Apple.</p>
        <div className='h-50 w-full items-center justify-between bg-zinc-800 mt-20 flex '>
          <img src="https://www.apple.com/v/services/i/images/services/overview/services/apple-one-banner/logo_apple_one__cftfcy53dtsi_large_2x.png" alt="" className='pl-50 h-10' />
          <p className='text-2xl font-bold text-center '>Get four services in one and enjoy more for less.</p>
          <button className='py-2 px-4 border-2 border-white rounded-3xl mr-30'>Learn more</button>
        </div>
      </div>
      <div className='h-auto w-full items-center justify-center'>
        <video className='h-auto w-full  shadow-lg' src="https://www.apple.com/105/media/us/services/2025/ff000a6e-4b20-4ad3-9702-b3cf302fd65d/anim/services/large.mp4"
          autoPlay
          loop
          muted
          playsInline
          controls
        ></video>
      </div>
      <div className='w-auto h-auto flex'>
        <EntertainmentMarque />
      </div>
      <div className='h-auto w-full items-center justify-center'>
        <video className='h-auto w-full  shadow-lg' src="https://www.apple.com/105/media/us/services/2024/a8e4c2f2-5eaa-476d-b419-e6faf9237070/anim/services/large.mp4"
          autoPlay
          loop
          muted
          playsInline
          controls
        ></video>
      </div>
      <div className='w-auto h-auto flex'>
        <EntertainmentMarque2 />
      </div>
      <div className='h-auto w-full items-center justify-center'>
        <video className='h-auto w-full  shadow-lg' src="https://www.apple.com/105/media/us/services/2024/416d7ef9-e5f1-4bdb-9443-3b7a1958236f/anim/hero/large.mp4"
          autoPlay
          loop
          muted
          playsInline
          controls
        ></video>
      </div>
      <div className='w-auto h-auto flex'>
        <EntertainmentMarque3 />
      </div>
      <div className='itmes-center justify-center text-center max-w-4/3 flex'>
        <div>
          <h1 className='flex text-md font-bold items-center justify-center pr-90'><img src="https://www.apple.com/v/services/i/images/services/overview/services/podcast_icon__gdo1h9k9z8uy_large_2x.png" alt="" className='h-10 w-10' />Apple Podcasts</h1>
          <h1 className='text-5xl font-bold pl-20'>Millions of shows, from the biggest names to the best independents.</h1>
        </div>
        <div className='w-full h-auto relative'>
          <button className='py-2 px-3 rounded-3xl bg-black text-white absolute bottom-0'>Open the app</button>
          <button className='py-2 px-3  absolute bottom-0 right-30'><u>Learn more</u></button>
        </div>

      </div>
      <div className='w-auto h-auto flex'>
        <EntertainmentMarque3 />
      </div>
    </div>
  )
}

export default Entertainment