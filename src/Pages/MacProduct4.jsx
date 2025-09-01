import React from 'react'
import { ChevronRight } from 'lucide-react'
const product = [
    {
        id: 1,
        name: "Mac accessories",
        title: "Explore keyboards, mice and other essentials",
        info:"Shop Mac accessories",
        image: "https://arigato-ipod.com/wp/wp-content/uploads/2024/10/241029magicmouseusbc-1024x512.webp"
    },
    {
        id: 2,
        name: "Studio Display",
        title: "The 68.29 cm (27″) 5K Retina display pairs beautifully with any Mac.",
        info:"Learn more",
        image: "https://cdsassets.apple.com/live/7WUAS350/images/displays/mac-2022-display-setup-hero.png"
    },
];

const ProductCard = ({ product }) => {
    return (
        <div className=' rounded-2xl w-full bg-gray-100'>
            <div className="w-auto px-10 h-160 bg-cover bg-center rounded-lg shadow-lg hover:scale-101 delay-100 hover:cursor-pointer" >

                <h2 className='text-[30px] pl-4 pt-5 font-bold text-center' >{product.name}</h2>
                <p className='text-[20px] font-semibold pl-4 text-center'>{product.title}</p>
                <p className='text-[20px]  pl-4 text-center flex justify-center items-center text-blue-600 hover:underline'>{product.info}<ChevronRight size={20} /> </p>
                <img src={product.image} alt={product.name}  />
            </div>


        </div>

    )
}

const MacProduct4 = () => {
    return (
        <div className='h-auto flex flex-col mt-5 bg-white '>
            <div className='items-center justify-between flex'>
                <h1 className='text-6xl py-20 pl-10 font-semibold '>Mac essentials..</h1>
                <button className='text-blue-600 hover:underline px-20 text-xl flex justify-center items-center hover:cursor-pointer'>All Mac accessories<ChevronRight size={20} /></button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 mt-7 m-4'>
                {product.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div>
    )
}

export default MacProduct4