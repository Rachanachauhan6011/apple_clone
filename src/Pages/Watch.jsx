import React from 'react'
import WatchProduct1 from './WatchProduct1'
import WatchProduct2 from './WatchProduct2'
import WatchProduct3 from './WatchProduct3'
import WatchProduct4 from './WatchProduct4'
import { ChevronDown } from 'lucide-react'

const Watch = () => {
    return (
        <div className='h-auto w-full items-center justify-center bg-gray-100'>
            <h1 className='text-center justify-center items-center py-5 text-gray-700 flex '>Get up to 6 months of No Cost EMI‡ plus up to ₹6000.00 instant cashback◊ on selected Apple Watch models with eligible cards. <button className='text-blue-600 cursor-pointer hover:underline'>Shop</button></h1>
            <div className='h-auto w-full items-center justify-center bg-white'>
                <div className='h-40 w-full items-center justify-between flex'>
                    <h1 className='text-7xl font-bold p-15'>Apple Watch</h1>
                    <p className='text-3xl font-semibold max-w-1/4 p-8'>The ultimate device for a healthy life.</p>
                </div>
                <div className='h-auto w-auto px-5 rounded-2xl items-center justify-center'>
                    <video className='h-auto w-auto  rounded-2xl shadow-lg' src="https://www.apple.com/105/media/ww/watch/2024/f0b51c31-e8a5-44d7-b23d-51bd2858454a/anim/hero/xlarge_2x.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls
                    ></video>
                </div>
            </div>
            <div>
                <WatchProduct1 />
                <WatchProduct2 />
                <WatchProduct3 />
                <WatchProduct4 />
            </div>
            <div className='w-full h-250 bg-white my-10 '>
                <div className='h-220 m-20 my-5'>
                    <h1 className='text-6xl font-bold'>Made for each other.</h1>
                    <div className='mt-10 rounded-3xl bg-gray-100 h-auto flex  items-center justify-between'>
                        <div className='pl-10'>
                            <div className='space-y-2 border-b-1 border-gray-400'>
                                <h1 className='text-3xl font-semibold  justify-center w-100 p-2  '>Apple Watch and iPhone</h1>
                                <h1 className='text-[20px] justify-center w-100 p-2'>Combining Apple Watch and iPhone opens up a world of features that make each device better. You can do things like create a custom route with Maps on your iPhone, then download it to your watch to use any time. Or start a cycling workout on your watch and see your metrics automatically appear as a Live Activity on your iPhone.</h1>
                            </div>
                            <div className='space-y-2 border-b-1 py-5 border-gray-400 justify-between flex'>
                                <h1 className='text-3xl font-semibold  justify-center w-100 p-2  '>Apple Watch and AirPods</h1>
                                <h1 className='p-2 text-gray-600'><ChevronDown size={40} /></h1>
                            </div>
                        </div>

                        <div>
                            <img src="https://velo-cdn.outsideonline.com/wp-content/uploads/2023/06/Apple-WatchOS10-update-power-meter-phone-2.jpg" alt="" className='h-220 w-220 p-2' />

                        </div>
                    </div>
                </div>
            </div>
                       <div className='max-w-1/2 h-auto  p-2'>
                <h1 className='text-8xl font-bold p-10 '>Apple Watch</h1>
                <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                    <div>
                        <ul className='space-y-2 text-2xl font-bold text-gray-800 pl-10'>
                            <li className='text-2sm text-gray-500 font-normal'>Explore Watch</li>
                            <li className='cursor-pointer hover:text-black py-1'>Explore All Apple Watch</li>
                            <li className='cursor-pointer hover:text-black py-1'>Apple Watch Series 10</li>
                            <li className='cursor-pointer hover:text-black py-1'>Apple Watch Ultra 2</li>
                            <li className='cursor-pointer hover:text-black py-1'>Apple Watch SE</li>
                            <li className='cursor-pointer hover:text-black py-1'>Apple Watch Nike</li>
                        </ul>
                        <ul className='space-y-2 font-semibold text-gray-800 pl-10 pt-5'>
                            <li className='text-[18px] text-gary-300 hover:text-black cursor-pointer'>Compare Watch</li>
                            <li className='text-[18px] text-gary-300 hover:text-black cursor-pointer'>Why Apple Watch</li>
                        </ul>


                    </div>
                    <div>
                        <ul className='space-y-2 text-[18px] font-semibold text-gray-800 pl-10'>
                            <li className='text-2sm text-gray-500 font-normal'>Shop Watch</li>
                            <li className='cursor-pointer hover:text-black py-1'>Shop Apple Watch</li>
                            <li className='cursor-pointer hover:text-black py-1'>Apple Watch Straps</li>
                            <li className='cursor-pointer hover:text-black py-1'>Apple Watch Accessories</li>
                            <li className='cursor-pointer hover:text-black py-1'>Ways to Buy</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='space-y-2 text-[18px] font-semibold text-gray-800 pl-10'>
                            <li className='text-2sm text-gray-500 font-normal'>More from Watch</li>
                            <li className='cursor-pointer hover:text-black py-1'>Apple Watch Support</li>
                            <li className='cursor-pointer hover:text-black py-1'>AppleCare</li>
                            <li className='cursor-pointer hover:text-black py-1'>watchOS 26 Preview</li>
                            <li className='cursor-pointer hover:text-black py-1'>Apple Watch For Your Kids</li>
                            <li className='cursor-pointer hover:text-black py-1'>Apps by Apple</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Watch