import React from 'react'

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
        <div className='h-auto w-full '>
      <marquee behavior="scroll" direction="left">
        <div className='flex h-70 w-90'>
                  <img src="https://is1-ssl.mzstatic.com/image/thumb/GqtEVQMUxjX2CgqfrhW9hQ/838x472.jpg" alt="" />
        <img src="https://is1-ssl.mzstatic.com/image/thumb/EVPS3kWppIr3afjftSqYBg/838x472.jpg" alt="" />
        <img src="https://is1-ssl.mzstatic.com/image/thumb/YOgobsksqgV_waAIE0-63A/838x472.jpg" alt="" />
        <img src="https://is1-ssl.mzstatic.com/image/thumb/5geoozRQUAjDnWF2KLHyJg/838x472.jpg" alt="" />
        <img src="https://is1-ssl.mzstatic.com/image/thumb/C34jADlGtR5wObjPAMbW4w/838x472.jpg" alt="" />
        <img src="https://is1-ssl.mzstatic.com/image/thumb/Hfukww-HLCzjsrOLVJUcIw/838x472.jpg" alt="" />
        <img src="https://is1-ssl.mzstatic.com/image/thumb/44dJzkosAhD0-ugRepvsfw/838x472.jpg" alt="" />
        <img src="https://is1-ssl.mzstatic.com/image/thumb/yz8wdRYi6Dput1ZLlsV0MA/838x472.jpg" alt="" />
        <img src="https://is1-ssl.mzstatic.com/image/thumb/gIyDtYBYBgDR4C0oBozlXQ/838x472.jpg" alt="" />
        </div>

      </marquee>
    </div>
    </div>
  )
}

export default Entertainment