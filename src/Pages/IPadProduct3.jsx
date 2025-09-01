import React from 'react'
import { ChevronRight } from 'lucide-react'
const product1 = [
    {
        id: 1,
        name: "Apple Pencil",
        title: "Dream it up. Jot it down",
        info: "Learn more",
        image: "https://www.apple.com/in/apple-pencil/images/overview/usb-c/apple_pencil_art__fdt7iutg5gey_large_2x.png"
    },
];

const product2 = [
    {
        id: 2,
        name: "Keyboards for iPad",
        title: "Type it out. Take it with you",
        info: "Learn more",
        image: "https://www.apple.com/v/ipad-keyboards/n/images/overview/selector/selector_hero__clnwj71w6tzm_large_2x.jpg"
    },
]

const ProductCard = ({ product1 }) => {
    return (
        <div className=' rounded-2xl w-full bg-gray-100'>
            <div className="w-auto px-10 h-160 bg-cover bg-center rounded-lg shadow-lg hover:scale-101 delay-100 hover:cursor-pointer" >

                <h2 className='text-[30px] pl-4 pt-5 font-bold text-center' >{product1.name}</h2>
                <p className='text-[20px] font-semibold pl-4 text-center'>{product1.title}</p>
                <p className='text-[20px]  pl-4 text-center flex justify-center items-center text-blue-600 hover:underline'>{product1.info}<ChevronRight size={20} /> </p>
                <img src={product1.image} alt={product1.name} />
            </div>


        </div>

    )
}

const ProductCard1 = ({ product2 }) => {
    return (
        <div className=' rounded-2xl w-full bg-gray-100'>
            <div className="w-auto px-10 h-160 bg-cover bg-center rounded-lg shadow-lg hover:scale-101 delay-100 hover:cursor-pointer pt-10" >
                <img src={product2.image} alt={product2.name} />
                <h2 className='text-[30px] pl-4 pt-5 font-bold text-center' >{product2.name}</h2>
                <p className='text-[20px] font-semibold pl-4 text-center'>{product2.title}</p>
                <p className='text-[20px]  pl-4 text-center flex justify-center items-center text-blue-600 hover:underline'>{product2.info}<ChevronRight size={20} /> </p>

            </div>


        </div>
    )
}

const IPadProduct3 = () => {
    return (
        <div className='h-auto flex flex-col mt-5 bg-white '>
            <div className='items-center justify-between flex'>
                <h1 className='text-6xl py-20 pl-10 font-semibold '>iPad essentials..</h1>
                <button className='text-blue-600 hover:underline px-20 text-xl flex justify-center items-center hover:cursor-pointer'>All iPad accessories<ChevronRight size={20} /></button>
            </div>
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

export default IPadProduct3