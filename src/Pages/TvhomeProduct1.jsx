import React from 'react'
import { ChevronRight } from 'lucide-react'
const product1 = [
    {
        id: 1,
        name: "HomePod",
        title: "Profound sound.",
        price: "₹32900.00*",
        image: "https://www.apple.com/v/tv-home/o/images/overview/homepod__eam53jjm772a_large_2x.jpg"
    },
     
];
const product2 = [
 {
        id: 1,
        name: "HomePod mini",
        title: "Surprising sound for its size.",
        price: "₹10900.00*",
        image: "https://www.apple.com/v/tv-home/o/images/overview/room_filling_sound__zagu3551kwyi_large_2x.jpg"
    },
]


const ProductCard = ({ product1 }) => {
    return (
        <div className=' rounded-2xl w-auto mx-10 bg-black text-white'>
            <div className="w-auto h-170  rounded-lg shadow-lg delay-100 hover:cursor-pointer" >

                <h2 className='text-[25px] pl-4 font-bold text-center pt-7' >{product1.name}</h2>
                <p className='text-[35px] font-semibold pl-4 text-center'>{product1.title}</p>
                <p className='text-[20px]  pl-4 text-center flex justify-center items-center  pb-5'>{product1.price} </p>
                <div className='text-center items-center justify-center flex gap-7 pt-5'>
                    <button className='px-4 py-2 bg-blue-600 text-white rounded-2xl cursor-pointer'>Buy</button>
                    <button className='text-[15px] text-blue-600 hover:underline flex cursor-pointer'>Learn more <ChevronRight size={20} /></button>
                </div>
                <img src={product1.image} alt={product1.name} className='h-120'/>
            </div>


        </div>

    )
}

const ProductCard1 = ({ product2 }) => {
    return (
        <div className=' rounded-2xl w-auto mx-10 bg-white'>
            <div className="w-auto h-180  rounded-lg shadow-lg delay-100 hover:cursor-pointer" >

                <h2 className='text-[25px] pl-4 font-bold text-center pt-7' >{product2.name}</h2>
                <p className='text-[35px] font-semibold pl-4 text-center'>{product2.title}</p>
                <p className='text-[20px]  pl-4 text-center flex justify-center items-center  pb-5'>{product2.price} </p>
                <div className='text-center items-center justify-center flex gap-7 pt-5'>
                    <button className='px-4 py-2 bg-blue-600 text-white rounded-2xl cursor-pointer'>Buy</button>
                    <button className='text-[15px] text-blue-600 hover:underline flex cursor-pointer'>Learn more <ChevronRight size={20} /></button>
                </div>
                <img src={product2.image} alt={product2.name} className='h-auto'/>
            </div>


        </div>

    )
}


const TvhomeProduct1 = () => {
    return (
        <div className='h-auto flex flex-col mt-10 bg-gray-100'>
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

export default TvhomeProduct1