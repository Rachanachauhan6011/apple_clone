import React from 'react'
import { ChevronRight } from 'lucide-react'
const product = [
    {
        id: 1,
        name: "iPhone 16 Pro",
        info: "The ultimate iPhone.",
        price: "From ₹119900.00*or ₹19150.00/mo. for 6 mo.‡",
        image: "https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16pro__erw9alves2qa_xlarge_2x.png"
    },
    {
        id: 2,
        name: "iPhone 16",
        info: "SA total powerhouse.",
        price: "From ₹79900.00*or ₹12483.00/mo. for 6 mo.‡",
        image: "https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16__c5bvots96jee_xlarge_2x.png"
    },
    {
        id: 3,
        name: "iPhone 16e",
        info: "Latest iPhone. Greatest price.",
        price: "From ₹59900.00*or ₹9150.00/mo. for 6 mo.◊",
        image: "https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16e__cubm3xoy5qaa_xlarge_2x.png"
    },


];

const ProductCard = ({ product }) => {
    return (
        <div className=' rounded-2xl w-full'>
            <div className="w-full h-auto p-4 bg-cover bg-center rounded-lg   hover:cursor-pointer  ">
                <img src={product.image} alt={product.name} className='hover:scale-101 ' />
                <h2 className='text-[30px] pl-4 pt-4  font-semibold text-center' >{product.name}</h2>
                <h2 className='text-[18px] pl-4  font-semibold text-center' >{product.title}</h2>
                <h2 className='text-[20px] pl-4  text-center' >{product.info}</h2>
                <p className='text-[20px] font-semibold pt-2 pl-4 text-center'>{product.price}</p>
                <div className='items-center flex pt-10 text-center gap-10 pl-30'>
                    <button className='bg-blue-600 text-[20px] text-white rounded-4xl py-2 px-3 hover:bg-blue-500'>Learn more</button>
                    <button className='flex items-center justify-center text-xl text-blue-600 cursor-pointer hover:underline'>Buy<ChevronRight size={20} /></button>
                </div>
            </div>


        </div>

    )
}

const IphoneProduct2 = () => {
    return (
        <div className='h-auto flex flex-col mt-15  '>
            <div className='items-center justify-between flex'>
                <h1 className='text-6xl py-20 pl-10 font-semibold '>Explore the line-up.</h1>
                <button className='text-blue-600 hover:underline px-20 text-xl flex justify-center items-center hover:cursor-pointer'>Compare all models<ChevronRight size={20} /></button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-7 '>
                {product.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
            <div className='w-full h-auto border-t-1 border-gray-300 pl-10 grid md:grid-cols-2 lg:grid-cols-3'>
                <div className='w-auto px-5 h-auto items-center text-center justify-between  mx-15'>
                    <img src="https://www.apple.com/assets-www/en_WW/mac/tout_table/apple.intelligence_elevated_f063342ae.svg" alt="" className='pl-32 pt-10' />
                    <p className='text-xs text-gray-600'>Apple Intelligence1</p>
                    <img src="https://www.apple.com/v/iphone/home/cd/images/overview/select/product_tile_icon_a18_pro__exkx38vklpci_large_2x.png" alt="" className='pl-32 pt-10' />
                    <p className='text-xs text-gray-600'>A18 Pro chip with 6-core GPU</p>
                    <img src="https://www.apple.com/v/iphone/home/cd/images/overview/select/product_tile_icon_camera_button__e83hkgwaefam_large_2x.png" alt="" className='pl-32 pt-10' />
                    <p className='text-xs text-gray-600'>Camera Control</p>
                    <img src="https://www.apple.com/v/iphone/home/cd/images/overview/select/product_tile_icon_iphone_16_pro_camera__edtadvfv6hg2_large_2x.png" alt="" className='pl-32 pt-10' />
                    <p className='text-xs text-gray-600'>Pro camera system</p>
                    <p className='text-xs text-gray-600'>Our most advanced 48MP Fusion camera</p>
                    <p className='text-xs text-gray-600'>5x Telephoto camera</p>
                    <p className='text-xs text-gray-600'>48MP Ultra Wide camera</p>
                    <p className='text-xs text-gray-600'>Visual intelligence, to learn about your surroundings11</p>
                    <img src="https://www.apple.com/v/iphone/home/cd/images/overview/select/product_tile_icon_battery_100__den5pjokk60y_large_2x.png" alt="" className='pl-32 pt-10' />
                    <p className='text-xs text-gray-600'>Up to 33 hours video playback3</p>
                </div>
                <div className='w-auto  h-auto items-center text-center justify-between  '>
                    <img src="https://www.apple.com/assets-www/en_WW/mac/tout_table/apple.intelligence_elevated_f063342ae.svg" alt="" className='pl-55 text-center pt-10' />
                    <p className='text-xs text-gray-600'>Apple Intelligence1</p>
                    <img src="https://www.apple.com/v/iphone/home/cd/images/overview/select/product_tile_icon_a18__bpom9lrselte_large_2x.png" alt="" className='pl-60 pt-10' />
                    <p className='text-xs text-gray-600'>A18 chip with 5-core GPU</p>
                    <img src="https://www.apple.com/v/iphone/home/cd/images/overview/select/product_tile_icon_camera_button__e83hkgwaefam_large_2x.png" alt="" className='pl-60 pt-10' />
                    <p className='text-xs text-gray-600'>Camera Control</p>
                    <img src="https://www.apple.com/v/iphone/home/cd/images/overview/select/product_tile_icon_iphone_16_camera__fbzexjpz33iy_large_2x.png" alt="" className='pl-60 pt-10' />
                    <p className='text-xs text-gray-600'>Advanced dual-camera system</p>
                    <p className='text-xs text-gray-600'>48MP Fusion camera</p>
                    <p className='text-xs text-gray-600'>2x Telephoto</p>
                    <p className='text-xs text-gray-600'>12MP Ultra Wide camera</p>
                    <p className='text-xs text-gray-600'>Visual intelligence, to learn about your surroundings11</p>
                    <img src="https://www.apple.com/v/iphone/home/cd/images/overview/select/product_tile_icon_battery_100__den5pjokk60y_large_2x.png" alt="" className='pl-60 pt-10' />
                    <p className='text-xs text-gray-600'>Up to 27 hours video playback3</p>

                </div>
                <div className='w-auto  h-auto items-center text-center justify-center '>
                    <img src="https://www.apple.com/assets-www/en_WW/mac/tout_table/apple.intelligence_elevated_f063342ae.svg" alt="" className='pl-55 text-center pt-10' />
                    <p className='text-xs text-gray-600'>Apple Intelligence1</p>
                    <img src="https://www.apple.com/v/iphone/home/cd/images/overview/select/product_tile_icon_a18__bpom9lrselte_large_2x.png" alt="" className='pl-60 pt-10' />
                    <p className='text-xs text-gray-600'>A18 chip with 4-core GPU</p>
                    <img src="https://www.apple.com/v/iphone/home/cd/images/overview/select/product_tile_icon_camera_button__e83hkgwaefam_large_2x.png" alt="" className='pl-60 pt-10' />
                    <p className='text-xs text-gray-600'>Camera Control</p>
                    <img src="https://www.apple.com/v/iphone/home/cd/images/overview/select/product_tile_icon_iphone_16e_camera__czsbuoy3qb8m_large_2x.png" alt="" className='pl-60 pt-10' />
                    <p className='text-xs text-gray-600'>2‑in‑1 camera system</p>
                    <p className='text-xs text-gray-600'>48MP Fusion camera</p>
                    <p className='text-xs text-gray-600'>2x Telephoto</p>
                    <p className='text-xs text-gray-900'>_</p>
                    <p className='text-xs text-gray-600'>Visual intelligence, to learn about your surroundings11</p>

                    <img src="https://www.apple.com/v/iphone/home/cd/images/overview/select/product_tile_icon_battery_100__den5pjokk60y_large_2x.png" alt="" className='pl-60 pt-10' />
                    <p className='text-xs text-gray-600'>Up to 26 hours video playback12</p>

                </div>

            </div>
        </div>
    )
}

export default IphoneProduct2