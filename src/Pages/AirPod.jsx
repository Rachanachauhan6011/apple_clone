import React from 'react'
import { ChevronRight } from 'lucide-react'
import AirPodProduct1 from './AirPodProduct1'
import AirPodProduct2 from './AirPodProduct2'

const AirPod = () => {
    return (
        <div className='h-auto w-full items-center justify-center bg-gray-100'>
            <h1 className='text-center justify-center items-center py-5 text-gray-700 flex '>Get up to 6 months of No Cost EMI‡ plus up to ₹4000.00 instant cashback◊ on AirPods with eligible cards <button className='text-blue-600 cursor-pointer hover:underline'>Shop AirPods</button></h1>
            <div className='h-auto w-full items-center justify-center bg-gray-100'>
                <div className='h-40 w-full items-center justify-between flex'>
                    <h1 className='text-7xl font-bold p-15'>AirPod</h1>
                    <p className='text-3xl font-semibold max-w-1/4 p-8'>Designed to be loved.</p>
                </div>
                <div className='h-auto w-auto px-5 rounded-2xl items-center justify-center'>
                    <video className='h-auto w-auto  rounded-2xl shadow-lg' src="https://www.apple.com/105/media/us/airpods-max/2024/e8f376d6-82b2-40ca-8a22-5f87de755d6b/anim/max-loop/xlarge_2x.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls
                    ></video>
                </div>
                <div className='my-5 h-200 w-auto bg-cover rounded-3xl relative size-32 mx-5 ' style={{ backgroundImage: "url('https://www.apple.com/v/airpods/x/images/overview/pro_endframe__e2wscfy18pme_large_2x.jpg')" }}>
                    <div className='absolute bottom-0 inset-x-15 w-180 size-70'>
                        <h1 className='text-7xl text-white font-semibold p-2'>AirPods Pro 2</h1>
                        <h1 className='text-2xl font-bold text-white'>Hearing Health features including Loud Sound Reduction,Conversation Boost and Background Sounds.1</h1>
                        <h1 className='text-xl font-bold pt-10 text-white'>₹24900.00*</h1>
                    </div>
                    <div className='absolute right-0 bottom-0 size-20 w-60 h-10 flex gap-5 pb-10 items-center justify-center pr-2'>
                        <button className='rounded-3xl bg-blue-600 py-2 px-2 text-white'>Learn more</button>
                        <button className='py-2 px-7 rounded-3xl border-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white '>Buy</button>

                    </div>
                </div>
                <div className='my-10 mx-5 h-150 w-auto bg-contain bg-center bg-no-repeat overflow-hidden rounded-3xl relative size-32 bg-white' style={{ backgroundImage: "url('https://www.apple.com/v/airpods/x/images/overview/airpods_max_black__x3byrd2venmu_large_2x.png')" }}>

                    <h1 className='text-7xl font-semibold p-2'>AirPods Max</h1>
                    <div className='absolute bottom-0 inset-x-15 w-100 size-30'>
                        <h1 className='text-2xl font-bold'>Five fresh colours. Bold sound.</h1>
                        <h1 className='text-xl font-bold '>₹59900.00*</h1>
                    </div>
                    <div className='absolute right-0 bottom-0 size-20 w-60 h-10 flex gap-5 pb-10 items-center justify-center pr-2'>
                        <button className='rounded-3xl bg-blue-600 py-2 px-2 text-white'>Learn more</button>
                        <button className='py-2 px-7 rounded-3xl border-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white '>Buy</button>

                    </div>
                </div>


            </div>
            <div>
                <AirPodProduct1/>
                <AirPodProduct2/>
            </div>
            <div className='w-full h-auto bg-white pt-20'>
        <div className='h-auto  m-20'>
          <div className='mt-10 rounded-3xl bg-gray-100 h-auto flex  items-center justify-between'>
            <div className='pl-30'>
              <div className='space-y-2 '>
                <h1 className='text-3xl font-semibold  w-100 p-2 flex  '><img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="" className='h-10 w-10'/>Music</h1>
                <h1 className='text-[40px] font-bold justify-center w-100 p-2'>Get 3 months of Apple Music free with your AirPods.*</h1>
                <button className='text-[18px] text-blue-600 flex items-center justify-center cursor-pointer hover:underline'>learn more<ChevronRight/></button>
              </div>
            </div>

            <div className='pr-30 pt-4'>
              <img src="https://www.apple.com/v/airpods/x/images/overview/music/music_album_stack__bi4gk5n0vwb6_large_2x.png" alt="" className='h-100 w-150 p-2' />
              

            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default AirPod