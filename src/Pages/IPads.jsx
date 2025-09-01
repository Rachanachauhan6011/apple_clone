import React from 'react'
import IPadProduct1 from './IPadProduct1'
import IPadProduct2 from './IPadProduct2'
import IPadProduct3 from './IPadProduct3'
import IPadProduct4 from './IPadProduct4'
import {ChevronDown } from 'lucide-react'

const IPads = () => {
    return (
        <div className='h-auto w-full items-center justify-center bg-gray-100'>
            <div className='h-auto items-center text-center px-5 bg-white'>
                <ul className='flex p-2 text-xs font-semibold items-center justify-center text-center gap-10 text-gray-600'>
                    <li className='cursor-pointer'> <img src="https://www.apple.com/assets-www/en_WW/ipad/chapternav/ipad_pro_b05b29e18.svg" alt="" />iPad Pro</li>
                    <li className='cursor-pointer'> <img src="https://www.apple.com/assets-www/en_WW/ipad/chapternav/ipad_air_b05b29e18.svg" alt="" />iPad Air</li>
                    <li className='cursor-pointer'> <img src="https://www.apple.com/assets-www/en_WW/ipad/chapternav/ipad_ec6ec9ee7.svg" alt="" />iPad</li>
                    <li className='cursor-pointer'> <img src="https://www.apple.com/assets-www/en_WW/ipad/chapternav/ipad_mini_ca78d03ea.svg" alt="" />iPad Mini</li>
                    <li className='cursor-pointer'> <img src="https://www.apple.com/assets-www/en_WW/ipad/chapternav/compare_ipad_93f95f0a1.svg" alt="" />Compare</li>
                    <li className='cursor-pointer'> <img src="https://www.apple.com/assets-www/en_WW/ipad/chapternav/apple_pencil_607b17f9f.svg" alt="" />Apple Pencil</li>
                    <li className='cursor-pointer'> <img src="https://www.apple.com/assets-www/en_WW/ipad/chapternav/keyboard_ipad_0113a1a87.svg" alt="" />Keyboards</li>
                    <li className='cursor-pointer'> <img src="https://www.apple.com/assets-www/en_WW/ipad/chapternav/accessories_ipad_1d680a4ad.svg" alt="" />Accessories</li>
                    <li className='cursor-pointer'> <img src="https://www.apple.com/assets-www/en_WW/ipad/chapternav/ipados_1e9806c02.svg" alt="" />iPadOS 26</li>
                    <li className='cursor-pointer'> <img src="https://www.apple.com/assets-www/en_WW/ipad/chapternav/shop_ipad_a90662b1a.svg" alt="" />Shop iPad</li>
                </ul>
            </div>
                  <h1 className='text-center justify-center items-center py-5 text-gray-700 flex '>Buy iPad with education savings,* get AirPods or an eligible accessory of your choice.**<button className='text-blue-600 cursor-pointer hover:underline'>Shop</button></h1>
                   <div className='h-auto w-full items-center justify-center bg-white'>
        <div className='h-40 w-full items-center justify-between flex'>
          <h1 className='text-7xl font-bold p-15'>iPad</h1>
          <p className='text-3xl font-semibold max-w-1/4 p-8'>Touch, draw and type on one magical device.</p>
        </div>
        <div className='h-auto w-auto px-5 rounded-2xl items-center justify-center'>
          <video className='h-auto w-auto  rounded-2xl shadow-lg' src="https://www.apple.com/assets-www/en_WW/ipad/welcome/x1fba949bf_large.mp4"
            autoPlay
            loop
            muted
            playsInline
            controls
          ></video>
        </div>
      </div>
      <div>
        <IPadProduct1/>
        <IPadProduct2/>
        <IPadProduct3/>
        <IPadProduct4/>
        </div>
       <div className='w-full h-250 bg-white pt-20'>
        <div className='h-auto  m-20'>
          <h1 className='text-6xl font-bold'>Significant others.</h1>
          <div className='mt-10 rounded-3xl bg-gray-100 h-auto flex  items-center justify-between'>
            <div className='pl-10'>
              <div className='space-y-2 border-b-1 border-gray-300'>
                <h1 className='text-3xl font-semibold  justify-center w-100 p-2  '>iPad and iPhone</h1>
                <h1 className='text-[20px] justify-center w-100 p-2'>iPad is perfect for taking the content you capture on iPhone and bringing it to life on an immersive canvas. You can shoot videos and photos on your iPhone and use the large display of your iPad to edit, add animations and more. You can also pick up wherever you left off with Handoff.</h1>
              </div>
              <div className='space-y-2 border-b-1 py-5 border-gray-300 justify-between flex'>
                <h1 className='text-3xl font-semibold  justify-center w-100 p-2  '>iPad and Mac</h1>
                <h1 className='p-2 text-gray-600'><ChevronDown size={40} /></h1>
              </div>
              <div className='space-y-2 justify-between flex'>
                <h1 className='text-3xl font-semibold  justify-center w-100 p-2  '>iPad and Apple Watch</h1>
                <h1 className='p-2 text-gray-600'><ChevronDown size={40} /></h1>
              </div>
            </div>

            <div>
              <img src="https://www.apple.com/assets-www/en_IN/ipad/image_accordion/xlarge/ipad_iphone_12e58e193_2x.jpg" alt="" className='h-150 w-230 p-2' />

            </div>
          </div>
        </div>
      </div>
      <div className='max-w-1/2 h-auto  p-2'>
        <h1 className='text-8xl font-bold p-10 '>iPad</h1>
        <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
          <div>
            <ul className='space-y-2 text-2xl font-bold text-gray-800 pl-10'>
              <li className='text-2sm text-gray-500 font-normal'>Explore iPad</li>
              <li className='cursor-pointer hover:text-black py-1'>Explore All iPad</li>
              <li className='cursor-pointer hover:text-black py-1'>iPad pro</li>
              <li className='cursor-pointer hover:text-black py-1'>iPad Air</li>
              <li className='cursor-pointer hover:text-black py-1'>iPad</li>
              <li className='cursor-pointer hover:text-black py-1'>iPad mini</li>
              <li className='cursor-pointer hover:text-black py-1'>Apple Pencil</li>
              <li className='cursor-pointer hover:text-black py-1'>Kryboards</li>
            </ul>
            <ul className='space-y-2 font-semibold text-gray-800 pl-10 pt-5'>
              <li className='text-[18px] text-gary-300 hover:text-black cursor-pointer'>Compare iPad</li>
              <li className='text-[18px] text-gary-300 hover:text-black cursor-pointer'>Why iPad</li>
            </ul>


          </div>
          <div>
            <ul className='space-y-2 text-[18px] font-semibold text-gray-800 pl-10'>
              <li className='text-2sm text-gray-500 font-normal'>Shop iPad</li>
              <li className='cursor-pointer hover:text-black py-1'>Shop iPad</li>
              <li className='cursor-pointer hover:text-black py-1'>iPad Accessories</li>
              <li className='cursor-pointer hover:text-black py-1'>Ways to Buy</li>
              <li className='cursor-pointer hover:text-black py-1'>College Student Offer</li>
            </ul>
          </div>
          <div>
            <ul className='space-y-2 text-[18px] font-semibold text-gray-800 pl-10'>
              <li className='text-2sm text-gray-500 font-normal'>More from iPad</li>
              <li className='cursor-pointer hover:text-black py-1'>iPad Support</li>
              <li className='cursor-pointer hover:text-black py-1'>AppleCare</li>
              <li className='cursor-pointer hover:text-black py-1'>iPadOS 26 Preview</li>
              <li className='cursor-pointer hover:text-black py-1'>Apple Intelligence</li>
              <li className='cursor-pointer hover:text-black py-1'>Apps by Apple</li>
              <li className='cursor-pointer hover:text-black py-1'>iCloud+</li>
              <li className='cursor-pointer hover:text-black py-1'>Education</li>
            </ul>
          </div>
        </div>
      </div>
        </div>
    )
}

export default IPads