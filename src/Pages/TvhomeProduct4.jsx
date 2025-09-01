import React from 'react'
import { ChevronRight } from 'lucide-react'
import TvhomeProduct3 from './TvhomeProduct3';
const product = [
    {
        id: 1,
        name: "Stream award-winning Apple Originals on every screen.",
        image: "https://www.apple.com/v/tv-home/o/images/overview/tv_plus_logo__ftim9r0zkyum_large_2x.png"
    },
    {
        id: 2,
        name: "All music. Highest audio quality. Zero ads.",
        image: "https://www.apple.com/v/tv-home/o/images/overview/apple_music_logo__fysswdp9i4yi_large_2x.png"
    },
    {
        id: 3,
        name: "Best collection of mobile games for every player.",
        image: "https://www.apple.com/v/tv-home/o/images/overview/apple_arcade_logo__fkj0u4ziuguy_large_2x.png"
    },
];

const ProductCard = ({ product }) => {
    return (
        <div className=' rounded-2xl w-full'>
            <div className="w-auto h-auto p-4 rounded-lg   hover:cursor-pointer  ">
                <img src={product.image} alt={product.name} />
                <h2 className='text-[20px] pl-4 pt-5 font-semibold text-center' >{product.name}</h2>
                <div className='  pt-10  gap-10 pl-22'>
                    <button className=' flex px-5 text-center py-1  pt-2 text-xl rounded-3xl text-white bg-blue-600 cursor-pointer '>Try it free</button>
                    <button className='text-blue-600 text-[18px] py-2 hover:underline cursor-pointer flex items-center justify-center'>Learn more<ChevronRight/></button>
                    
                </div>
            </div>


        </div>

    )
}

const TvhomeProduct4 = () => {
    return (
        <div className='h-auto  flex flex-col mt-15  '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center mx-60 gap-5 mt-7 m-4 '>
                {product.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
          
        </div>
    )
}

export default TvhomeProduct4