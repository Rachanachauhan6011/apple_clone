import React from 'react'
import { ChevronRight } from 'lucide-react'
const product1 = [
    {
        id: 1,
        image1: "https://www.apple.com/v/tv-home/o/images/overview/apple_tv_4k_logo__vyjj7uki3tui_large_2x.png",
        title: "The Apple experience.Cinematic in every sense.",
        price: "Starting from ₹14900.00*",
        image: "https://www.apple.com/v/tv-home/o/images/overview/apple_tv_4k__b30wcqp0pdle_large_2x.jpg"
    },

];
const product2 = [
    {
        id: 1,
        image1: "https://www.apple.com/v/tv-home/o/images/overview/home_icon__9u57pp0qahea_large_2x.png",
        name: "Home app",
        title: "The foundation for a smarter home.",
        image: "https://www.apple.com/in/tv-home/images/overview/homeapp__cpc1k972xys2_large_2x.jpg"
    },
]


const ProductCard = ({ product1 }) => {
    return (
        <div className=' rounded-2xl w-auto mx-10 bg-white'>
            <div className="w-auto h-170  rounded-lg shadow-lg delay-100 hover:cursor-pointer" >
                <img src={product1.image1} alt="" className='items-center pl-70 h-5 ' />
                <p className='text-[35px] font-semibold pl-4 text-center'>{product1.title}</p>
                <p className='text-[20px]  pl-4 text-center flex justify-center items-center  pb-5'>{product1.price} </p>
                <div className='text-center items-center justify-center flex gap-7 '>
                    <button className='px-4 py-2 bg-blue-600 text-white rounded-2xl cursor-pointer'>Buy</button>
                    <button className='text-[20px] text-blue-600 hover:underline flex cursor-pointer items-center justify-center'>Learn more <ChevronRight size={20} /></button>
                </div>
                <img src={product1.image} alt={product1.name} className='h-110' />
            </div>


        </div>

    )
}

const ProductCard1 = ({ product2 }) => {
    return (
        <div className=' rounded-2xl w-auto mx-10 bg-white'>
            <div className="w-auto h-170  rounded-lg shadow-lg delay-100 hover:cursor-pointer" >
                <img src={product2.image1} alt="" className='items-center pl-70 h-15 ' />
                <h2 className='text-[25px] pl-4 font-bold text-center ' >{product2.name}</h2>
                <p className='text-[35px] font-semibold pl-4 text-center'>{product2.title}</p>
                <div className='text-center items-center justify-center flex gap-7 pt-5'>
                    <button className='text-[20px] text-blue-600 hover:underline flex cursor-pointer py-2 items-center justify-center'>Learn more <ChevronRight size={20} /></button>
                </div>
                <img src={product2.image} alt={product2.name} className='h-auto' />
            </div>


        </div>

    )
}


const TvhomeProduct2 = () => {
    return (
        <div className='h-auto flex flex-col mt-5 bg-gray-100'>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 mt-7 m-4'>
                {product1.map((item) => (
                    <ProductCard key={item.id} product1={item} />
                ))}
                {product2.map((item) => (
                    <ProductCard1 key={item.id} product2={item} />
                ))}
            </div>
        </div>
    )
}

export default TvhomeProduct2