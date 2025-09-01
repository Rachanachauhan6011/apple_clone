import React from 'react'
import { ChevronRight } from 'lucide-react'
const product = [
    {
        id: 1,
        name: "Apple Watch SE",
        info: "All the essentials.Light on price.",
        price: "From $249 or $20.75/mo. for 12 mo.*",
        image: "https://www.apple.com/v/watch/br/images/overview/select/product_se__c83w8hz9gre6_large_2x.png"
    },
    {
        id: 2,
        name: "Apple Watch Series 10",
        info: "Thinnest. Biggest display.23 Advanced health features.",
        price: "From $399 or $33.25/mo. for 12 mo.*",
        image: "https://www.apple.com/v/watch/br/images/overview/select/product_s10__c724044usymq_large_2x.png"
    },
    {
        id: 3,
        name: "Apple Watch Ultra 2",
        info: "The ultimate sports and adventure watch.",
        price: "From $799 or $66.58/mo. for 12 mo.*",
        image: "https://www.apple.com/in/watch/images/overview/select/product_u2__hedpiz396nue_large_2x.png"
    },


];

const ProductCard = ({ product }) => {
    return (
        <div className=' rounded-2xl w-full'>
            <div className="w-auto h-auto p-4 bg-cover bg-center rounded-lg   hover:cursor-pointer  ">
                <img src={product.image} alt={product.name} className='hover:scale-101 ' />
                <h2 className='text-[30px] pl-4 pt-4  font-semibold text-center' >{product.name}</h2>
                <h2 className='text-[18px] pl-4  font-semibold text-center' >{product.title}</h2>
                <h2 className='text-[20px] pl-4  text-center' >{product.info}</h2>
                <p className='text-[18px] font-semibold pt-2 pl-4 text-center'>{product.price}</p>
                <div className='items-center flex pt-10 text-center gap-10 pl-30'>
                    <button className='bg-blue-600 text-[20px] text-white rounded-4xl py-2 px-3 hover:bg-blue-500'>Learn more</button>
                    <button className='flex items-center justify-center text-xl text-blue-600 cursor-pointer hover:underline'>Buy<ChevronRight size={20} /></button>
                </div>
            </div>


        </div>

    )
}

const WatchProduct2 = () => {
    return (
        <div className='h-auto flex flex-col mt-15  '>
            <div className='items-center justify-between flex'>
                <h1 className='text-6xl py-20 pl-10 font-semibold '>Explore the line-up.</h1>
                <button className='text-blue-600 hover:underline px-20 text-xl flex justify-center items-center hover:cursor-pointer'>Compare all models<ChevronRight size={20} /></button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-7 px-40'>
                {product.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
            <div className='w-full h-auto border-t-1 border-gray-300 pl-10 grid md:grid-cols-2 lg:grid-cols-3'>
                <div className='w-auto px-5 h-auto items-center text-center justify-between  mx-15'>
                    <img src="https://www.apple.com/v/watch/br/images/overview/select/product_tile_icon_case_sizes__b1qdj0t9l8k2_large_2x.png" alt="" className='pl-32 pt-10' />
                    <p className='text-xs text-gray-600'>44 mm or 40 mm</p>
                    <p className='text-xs text-gray-600'>aluminium case</p>
                    <img src="https://www.apple.com/v/watch/br/images/overview/select/product_tile_icon_case_fill__e6beid0z2gia_large_2x.png" alt="" className='pl-32 pt-10' />
                    <p className='text-xs text-gray-600'>Retina display</p>
                    <p className='text-xs text-gray-600'>Up to 1,000 nits</p>
                    <img src="https://www.apple.com/v/watch/br/images/overview/select/product_tile_icon_chip_s8__cnwtvef6rxg2_large_2x.png" alt="" className='pl-32 pt-10' />
                    <p className='text-xs text-gray-600'>S8 SiP</p>
                    <p className='text-xs text-gray-600'>-</p>
                    <p className='text-xs text-gray-600'>Siri</p>
                    <p className='text-xs text-gray-600'>Find iPhone</p>
                    <img src="https://www.apple.com/v/watch/br/images/overview/select/product_tile_icon_heart__bdruv1reptci_large_2x.png" alt="" className='pl-32 pt-10' />
                    <p className='text-xs text-gray-600'>-</p>
                    <p className='text-xs text-gray-600'>High and low heart rate notifications</p>
                    <p className='text-xs text-gray-600'>Irregular rhythm notifications3</p>
                    <p className='text-xs text-gray-600'>Low cardio fitness notifications</p>
                    <p className='text-xs text-gray-600'>-</p>
                    <img src="https://www.apple.com/v/watch/br/images/overview/select/product_tile_icon_battery__duz6yadjto4m_large_2x.png" alt="" className='pl-32 pt-10' />
                    <p className='text-xs text-gray-600'>Up to 18 hours20</p>
                    <p className='text-xs text-gray-600'>Low Power Mode</p>
                    <p className='text-xs text-gray-600'>-</p>

                </div>
                <div className='w-auto  h-auto items-center text-center justify-between  '>
                    <img src="https://www.apple.com/v/watch/br/images/overview/select/product_tile_icon_case_sizes__b1qdj0t9l8k2_large_2x.png" alt="" className='pl-55 text-center pt-10' />
                    <p className='text-xs text-gray-600'>46 mm or 42 mm</p>
                    <p className='text-xs text-gray-600'>aluminium or titanium case</p>
                    <img src="https://www.apple.com/v/watch/br/images/overview/select/product_tile_icon_case_fill__e6beid0z2gia_large_2x.png" alt="" className='pl-60 pt-10' />
                    <p className='text-xs text-gray-600'>Always-On Retina display</p>
                    <p className='text-xs text-gray-600'>Up to 2,000 nits</p>
                    <img src="https://www.apple.com/v/watch/br/images/overview/select/product_tile_icon_chip_s10_fill__ge4rm874e92e_large_2x.png" alt="" className='pl-60 pt-10' />
                    <p className='text-xs text-gray-600'>S10 SiP</p>
                    <p className='text-xs text-gray-600'>Double tap gesture</p>
                    <p className='text-xs text-gray-600'>Faster on-device Siri</p>
                    <p className='text-xs text-gray-600'>Precision Finding for iPhone14</p>
                    <img src="https://www.apple.com/v/watch/br/images/overview/select/product_tile_icon_heart__bdruv1reptci_large_2x.png" alt="" className='pl-60 pt-10' />
                    <p className='text-xs text-gray-600'>Blood Oxygen app19</p>
                    <p className='text-xs text-gray-600'>ECG app2</p>
                    <p className='text-xs text-gray-600'>High and low heart rate notifications</p>
                    <p className='text-xs text-gray-600'>Irregular rhythm notifications3</p>
                    <p className='text-xs text-gray-600'>Low cardio fitness notifications</p>
                    <img src="https://www.apple.com/v/watch/br/images/overview/select/product_tile_icon_battery__duz6yadjto4m_large_2x.png" alt="" className='pl-60 pt-10' />
                    <p className='text-xs text-gray-600'>Up to 18 hours21</p>
                    <p className='text-xs text-gray-600'>Up to 36 hours in Low Power Mode21</p>
                    <p className='text-xs text-gray-600'>Fast charging22</p>

                </div>
                <div className='w-auto  h-auto items-center text-center justify-center '>
                    <img src="https://www.apple.com/v/watch/br/images/overview/select/product_tile_icon_case__f8z6kesshgmm_large_2x.png" alt="" className='pl-55 text-center pt-10' />
                    <p className='text-xs text-gray-600'>49 mm</p>
                    <p className='text-xs text-gray-600'>titanium case</p>
                    <img src="https://www.apple.com/v/watch/br/images/overview/select/product_tile_icon_case_fill__e6beid0z2gia_large_2x.png" alt="" className='pl-60 pt-10' />
                    <p className='text-xs text-gray-600'>Always-On Retina display</p>
                    <p className='text-xs text-gray-600'>Up to 3,000 nits</p>
                    <img src="https://www.apple.com/v/watch/br/images/overview/select/product_tile_icon_chip_s9__bpbhs9jwhcb6_large_2x.png" alt="" className='pl-60 pt-10' />
                    <p className='text-xs text-gray-600'>S9 SiP</p>
                    <p className='text-xs text-gray-600'>Double tap gesture</p>
                    <p className='text-xs text-gray-600'>Faster on-device Siri</p>
                    <p className='text-xs text-gray-600'>Precision Finding for iPhone14</p>
                    
                    <img src="https://www.apple.com/v/watch/br/images/overview/select/product_tile_icon_heart__bdruv1reptci_large_2x.png" alt="" className='pl-60 pt-10' />
                    <p className='text-xs text-gray-600'>Blood Oxygen app19</p>
                    <p className='text-xs text-gray-600'>CG app2</p>
                    <p className='text-xs text-gray-600'>High and low heart rate notifications</p>
                    <p className='text-xs text-gray-900'>Irregular rhythm notifications3</p>
                    <p className='text-xs text-gray-600'>Low cardio fitness notifications</p>

                    <img src="https://www.apple.com/v/watch/br/images/overview/select/product_tile_icon_battery__duz6yadjto4m_large_2x.png" alt="" className='pl-60 pt-10' />
                    <p className='text-xs text-gray-600'>Up to 36 hours16</p>
                    <p className='text-xs text-gray-600'>Up to 72 hours in Low Power Mode16</p>
                    <p className='text-xs text-gray-600'>Fast charging22</p>

                </div>

            </div>
        </div>
    )
}

export default WatchProduct2