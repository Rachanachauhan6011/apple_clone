import React from 'react'
import MacProduct1 from './MacProduct1'
import MacProduct2 from './MacProduct2'
import { ChevronRight } from 'lucide-react'
import { ChevronDown } from 'lucide-react'
import MacProduct3 from './MacProduct3'
import MacProduct4 from './MacProduct4'

const Mac = () => {
  return (
    <div className='h-auto w-full items-center justify-center bg-gray-100'>
      <div className='h-auto items-center text-center px-5 bg-white'>
        <ul className='flex p-2 text-xs font-semibold items-center justify-center text-center gap-10 text-gray-600'>
          <li className='cursor-pointer'> <img src="https://www.apple.com/assets-www/en_WW/mac/chapternav/macbookair15.macbookair13_7e8b978ec.svg" alt="" />MacBook Air</li>
          <li className='cursor-pointer'> <img src="https://www.apple.com/assets-www/en_WW/mac/chapternav/macbookpro16.macbookpro14_c495bb45b.svg" alt="" />MacBook Pro</li>
          <li className='cursor-pointer'> <img src="https://www.apple.com/assets-www/en_WW/mac/chapternav/imac24_065a2bf21.svg" alt="" />iMac</li>
          <li className='cursor-pointer'> <img src="https://www.apple.com/assets-www/en_WW/mac/chapternav/macmini_f7eabee7b.svg" alt="" />Mac Mini</li>
          <li className='cursor-pointer'> <img src="https://www.apple.com/assets-www/en_WW/mac/chapternav/macstudio_d48bbc5a3.svg" alt="" />Mac Studio</li>
          <li className='cursor-pointer'> <img src="https://www.apple.com/assets-www/en_WW/mac/chapternav/macpro_a0f334173.svg" alt="" />Mac Pro</li>
          <li className='cursor-pointer'> <img src="https://www.apple.com/assets-www/en_WW/mac/chapternav/compare_e6faa4436.svg" alt="" />Compare</li>
          <li className='cursor-pointer'> <img src="https://www.apple.com/assets-www/en_WW/mac/chapternav/displays_ce60bd4d1.svg" alt="" />Display</li>
          <li className='cursor-pointer'> <img src="https://www.apple.com/assets-www/en_WW/mac/chapternav/accessories_3bf8fc936.svg" alt="" />Accessories</li>
          <li className='cursor-pointer'> <img src="https://www.apple.com/assets-www/en_WW/mac/chapternav/macos_a763f3f5e.svg" alt="" />Tahoe 26</li>
          <li className='cursor-pointer'> <img src="https://www.apple.com/assets-www/en_WW/mac/chapternav/shop_mac_b01536048.svg" alt="" />Shop Mac</li>
        </ul>
      </div>
      <h1 className='text-center justify-center items-center py-5 text-gray-700 flex '>Buy Mac with education savings,* get AirPods or an eligible accessory of your choice.** <button className='text-blue-600 cursor-pointer hover:underline'>Shop</button></h1>

      <div className='h-auto w-full items-center justify-center bg-white'>
        <div className='h-40 w-full items-center justify-between flex'>
          <h1 className='text-7xl font-bold p-15'>Mac</h1>
          <p className='text-3xl font-semibold max-w-1/4 p-8'>If you can dream it,Mac can do it.</p>
        </div>
        <div className='h-auto w-auto px-5 rounded-2xl items-center justify-center'>
          <video className='h-auto w-auto  rounded-2xl shadow-lg' src="https://www.apple.com/assets-www/en_WW/mac/welcome/x4fa4f3ce9_large.mp4"
            autoPlay
            loop
            muted
            playsInline
            controls
          ></video>
        </div>
      </div>
      <div>
        <MacProduct1 />
        <MacProduct2 />
      </div>
      <div className='h-auto w-auto m-20'>
        <h1 className='text-6xl font-bold'>Switch to Mac.</h1>
        <div className='mt-10 rounded-3xl bg-white h-auto flex  items-center justify-between'>
          <div className='space-y-2'>
            <h1 className='text-3xl font-semibold  justify-center pl-4 '>Mac does that</h1>
            <h1 className='text-[20px]   justify-center pl-4'>See how easy it is to switch to Mac</h1>
            <button className='text-[20px] justify-center pl-4 text-blue-600 hover:underline flex items-center'>Learn more <ChevronRight size={20} /></button>
          </div>
          <div>
            <img src="https://www.apple.com/ca/macos/macos-sequoia/images/meta/macos-sequoia__qclpvh6m08ay_og.png" alt="" className='h-150 w-230 p-2' />

          </div>
        </div>
      </div>
      <MacProduct3 />
      <div className='w-full h-250 bg-white'>
        <div className='h-auto  m-20'>
          <h1 className='text-6xl font-bold'>Significant others.</h1>
          <div className='mt-10 rounded-3xl bg-gray-100 h-auto flex  items-center justify-between'>
            <div className='pl-10'>
              <div className='space-y-2 border-b-1 border-gray-400'>
                <h1 className='text-3xl font-semibold  justify-center w-100 p-2  '>Mac and iPhone</h1>
                <h1 className='text-[20px] justify-center w-100 p-2'>Answer calls or messages from your iPhone directly on your Mac. See and control what’s on your iPhone from your Mac with i⁠P⁠h⁠o⁠n⁠e⁠ ⁠M⁠i⁠r⁠r⁠o⁠r⁠i⁠n⁠g⁠. Use U⁠n⁠i⁠v⁠e⁠r⁠s⁠a⁠l⁠ ⁠C⁠l⁠i⁠p⁠b⁠o⁠a⁠r⁠d to copy images, video or text from your iPhone, then paste into another app on your nearby Mac. And thanks to iCloud, you can access your files from either your iPhone or your Mac. And so m⁠u⁠c⁠h⁠ ⁠m⁠o⁠r⁠e⁠.</h1>
              </div>
              <div className='space-y-2 border-b-1 py-5 border-gray-400 justify-between flex'>
                <h1 className='text-3xl font-semibold  justify-center w-100 p-2  '>Mac and iPad</h1>
                <h1 className='p-2 text-gray-600'><ChevronDown size={40} /></h1>
              </div>
              <div className='space-y-2 border-b-1 py-5 border-gray-400 justify-between flex'>
                <h1 className='text-3xl font-semibold  justify-center w-100 p-2  '>Mac and Apple Watch</h1>
                <h1 className='p-2 text-gray-600'><ChevronDown size={40} /></h1>
              </div>
            </div>

            <div>
              <img src="https://www.apple.com/assets-www/en_IN/mac/image_accordion/xlarge/mac_iphone_611d01189_2x.jpg" alt="" className='h-150 w-230 p-2' />

            </div>
          </div>
        </div>
      </div>
      <div>
        <MacProduct4 />
      </div>
      <div className='max-w-1/2 h-auto  p-2'>
        <h1 className='text-8xl font-bold p-10 '>Mac</h1>
        <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
          <div>
            <ul className='space-y-2 text-2xl font-bold text-gray-800 pl-10'>
              <li className='text-2sm text-gray-500 font-normal'>Explore Mac</li>
              <li className='cursor-pointer hover:text-black py-1'>Explore All Mac</li>
              <li className='cursor-pointer hover:text-black py-1'>MacBook Air</li>
              <li className='cursor-pointer hover:text-black py-1'>MacBook Pro</li>
              <li className='cursor-pointer hover:text-black py-1'>iMac</li>
              <li className='cursor-pointer hover:text-black py-1'>Mac mini</li>
              <li className='cursor-pointer hover:text-black py-1'>Mac Studio</li>
              <li className='cursor-pointer hover:text-black py-1'>Mac Pro</li>
              <li className='cursor-pointer hover:text-black py-1'>Displays</li>
            </ul>
            <ul className='space-y-2 font-semibold text-gray-800 pl-10 pt-5'>
              <li className='text-[18px] text-gary-300 hover:text-black cursor-pointer'>Compare Mac</li>
              <li className='text-[18px] text-gary-300 hover:text-black cursor-pointer'>Switch from PC to Mac</li>
            </ul>


          </div>
          <div>
            <ul className='space-y-2 text-[18px] font-semibold text-gray-800 pl-10'>
              <li className='text-2sm text-gray-500 font-normal'>Shop Mac</li>
              <li className='cursor-pointer hover:text-black py-1'>Shop Mac</li>
              <li className='cursor-pointer hover:text-black py-1'>Mac Accessories</li>
              <li className='cursor-pointer hover:text-black py-1'>Ways to Buy</li>
              <li className='cursor-pointer hover:text-black py-1'>College Student Offer</li>
            </ul>
          </div>
          <div>
            <ul className='space-y-2 text-[18px] font-semibold text-gray-800 pl-10'>
              <li className='text-2sm text-gray-500 font-normal'>More from Mac</li>
              <li className='cursor-pointer hover:text-black py-1'>Mac Support</li>
              <li className='cursor-pointer hover:text-black py-1'>AppleCare</li>
              <li className='cursor-pointer hover:text-black py-1'>macOS Tahoe 26 Preview</li>
              <li className='cursor-pointer hover:text-black py-1'>Apple Intelligence</li>
              <li className='cursor-pointer hover:text-black py-1'>Apps by Apple</li>
              <li className='cursor-pointer hover:text-black py-1'>Continuity</li>
              <li className='cursor-pointer hover:text-black py-1'>iCloud+</li>
              <li className='cursor-pointer hover:text-black py-1'>Mac for Business</li>
              <li className='cursor-pointer hover:text-black py-1'>Education</li>
            </ul>
          </div>
        </div>
      </div>




    </div>
  )
}

export default Mac