import React from 'react'
import IphoneProduct1 from './IphoneProduct1'
import IphoneProduct2 from './IphoneProduct2'
import IphoneProduct3 from './IphoneProduct3'
import IphoneProduct4 from './IphoneProduct4'
import { ChevronDown } from 'lucide-react'

const IPhone = () => {
    return (
        <div className='h-auto w-full items-center justify-center bg-gray-100'>
            <div className='h-auto items-center text-center px-5 bg-white'>
                <ul className='flex p-2 text-xs font-semibold items-center justify-center text-center gap-10 text-gray-600'>
                    <li className='cursor-pointer'> <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-icon-financing-202309?wid=42&hei=88&fmt=jpeg&qlt=90&.v=WktMazV6SC8yd2JnQ25Sc2xJWTZwOUcwQ0cyNmhwZWFIUkxxWUZRaTVvYUVMN2NuVlBVajF4MmpoWjdhYm9WZVY3MytCdHNES2RBd21ncWtSNUtxQm1tTXZweVZEd0lZbG40Rm8raEtDbzg" alt="" className='h-13'/>iPhone 16 Pro</li>
                    <li className='cursor-pointer'> <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-icon-financing-202309?wid=42&hei=88&fmt=jpeg&qlt=90&.v=WktMazV6SC8yd2JnQ25Sc2xJWTZwOUcwQ0cyNmhwZWFIUkxxWUZRaTVvYUVMN2NuVlBVajF4MmpoWjdhYm9WZVY3MytCdHNES2RBd21ncWtSNUtxQm1tTXZweVZEd0lZbG40Rm8raEtDbzg" alt="" className='h-13'/>iPhone 16</li>
                    <li className='cursor-pointer'> <img src="https://www.apple.com/assets-www/en_WW/ipad/chapternav/ipad_ec6ec9ee7.svg" alt="" />iPhone 16e</li>
                    <li className='cursor-pointer'> <img src="https://www.apple.com/assets-www/en_WW/ipad/chapternav/ipad_mini_ca78d03ea.svg" alt="" />iPhone 15</li>
                    <li className='cursor-pointer'> <img src="https://www.apple.com/assets-www/en_WW/ipad/chapternav/compare_ipad_93f95f0a1.svg" alt="" />Compare</li>
                    <li className='cursor-pointer'> <img src="https://www.apple.com/assets-www/en_WW/ipad/chapternav/shop_ipad_a90662b1a.svg" alt="" />Shop iPhone</li>
                </ul>
            </div>
            <h1 className='text-center justify-center items-center py-5 text-gray-700 flex '>Get iPhone 16 from just ₹12483.00/mo. for up to 6 mo.‡ with No Cost EMI and instant cashback. <button className='text-blue-600 cursor-pointer hover:underline'>Shop</button></h1>
            <div className='h-auto w-full items-center justify-center bg-white'>
                <div className='h-40 w-full items-center justify-between flex'>
                    <h1 className='text-7xl font-bold p-15'>iPhone</h1>
                    <p className='text-3xl font-semibold max-w-1/4 p-8'>Designed to be loved.</p>
                </div>
                <div className='h-auto w-auto px-5 rounded-2xl items-center justify-center'>
                    <video className='h-auto w-auto  rounded-2xl shadow-lg' src="https://www.apple.com/105/media/ww/iphone/family/2025/e7ff365a-cb59-4ce9-9cdf-4cb965455b69/anim/welcome3/xlarge_2x.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls
                    ></video>
                </div>
            </div>
            <div>
                <IphoneProduct1 />
                <IphoneProduct2 />
                <IphoneProduct3 />
                <IphoneProduct4 />
            </div>
            <div className='w-full h-250 bg-white'>
                <div className='h-auto  m-20'>
                    <h1 className='text-6xl font-bold'>Significant others.</h1>
                    <div className='mt-10 rounded-3xl bg-gray-100 h-auto flex  items-center justify-between'>
                        <div className='pl-10'>
                            <div className='space-y-2 border-b-1 border-gray-400'>
                                <h1 className='text-3xl font-semibold  justify-center w-100 p-2  '>iPhone and Mac</h1>
                                <h1 className='text-[20px] justify-center w-100 p-2'>With iPhone Mirroring, you can view your iPhone screen on your Mac and control it without picking up your phone. Continuity features also let you answer calls or messages right from your Mac. You can even copy images, video or text from your iPhone and paste it all into a different app on your Mac. And with iCloud, you can access your files from either device.</h1>
                            </div>
                            <div className='space-y-2 border-b-1 py-5 border-gray-400 justify-between flex'>
                                <h1 className='text-3xl font-semibold  justify-center w-100 p-2  '>iPhone and Apple Watch</h1>
                                <h1 className='p-2 text-gray-600'><ChevronDown size={40} /></h1>
                            </div>
                            <div className='space-y-2 border-b-1 py-5 border-gray-400 justify-between flex'>
                                <h1 className='text-3xl font-semibold  justify-center w-100 p-2  '>iPhone and AirPods</h1>
                                <h1 className='p-2 text-gray-600'><ChevronDown size={40} /></h1>
                            </div>
                        </div>

                        <div>
                            <img src="https://cdsassets.apple.com/live/7WUAS350/images/macos/sequoia/macbook-air-13in-iphone-15-pro-macos-sequoia-ios-18-iphone-mirroring-hero.png" alt="" className='h-130 w-220 p-2' />

                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-1/2 h-auto  p-2'>
                <h1 className='text-8xl font-bold p-10 '>iPhone</h1>
                <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                    <div>
                        <ul className='space-y-2 text-2xl font-bold text-gray-800 pl-10'>
                            <li className='text-2sm text-gray-500 font-normal'>Explore iPhone</li>
                            <li className='cursor-pointer hover:text-black py-1'>Explore All iPhone</li>
                            <li className='cursor-pointer hover:text-black py-1'>iPhone 16 Pro</li>
                            <li className='cursor-pointer hover:text-black py-1'>iPhone 16</li>
                            <li className='cursor-pointer hover:text-black py-1'>iPhone 16e</li>
                            <li className='cursor-pointer hover:text-black py-1'>iPhone 15</li>
                        </ul>
                        <ul className='space-y-2 font-semibold text-gray-800 pl-10 pt-5'>
                            <li className='text-[18px] text-gary-300 hover:text-black cursor-pointer'>Compare iPhone</li>
                            <li className='text-[18px] text-gary-300 hover:text-black cursor-pointer'>Switch from Android</li>
                        </ul>


                    </div>
                    <div>
                        <ul className='space-y-2 text-[18px] font-semibold text-gray-800 pl-10'>
                            <li className='text-2sm text-gray-500 font-normal'>Shop iPhone</li>
                            <li className='cursor-pointer hover:text-black py-1'>Shop iPhone</li>
                            <li className='cursor-pointer hover:text-black py-1'>iPhone Accessories</li>
                            <li className='cursor-pointer hover:text-black py-1'>Apple Trade In</li>
                            <li className='cursor-pointer hover:text-black py-1'>Ways to Buy</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='space-y-2 text-[18px] font-semibold text-gray-800 pl-10'>
                            <li className='text-2sm text-gray-500 font-normal'>More from iPhone</li>
                            <li className='cursor-pointer hover:text-black py-1'>iPhone Support</li>
                            <li className='cursor-pointer hover:text-black py-1'>AppleCare</li>
                            <li className='cursor-pointer hover:text-black py-1'>iOS 26 Preview</li>
                            <li className='cursor-pointer hover:text-black py-1'>Apple Intelligence</li>
                            <li className='cursor-pointer hover:text-black py-1'>Apps by Apple</li>
                            <li className='cursor-pointer hover:text-black py-1'>iPhone Privacy</li>
                            <li className='cursor-pointer hover:text-black py-1'>iCloud+</li>
                            <li className='cursor-pointer hover:text-black py-1'>Wallet</li>
                            <li className='cursor-pointer hover:text-black py-1'>Siri</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IPhone