import React from 'react'
import { ChevronRight } from 'lucide-react'
const product = [
    {
        id: 1,
        name: "A splash of colours",
        title: "",
        info: "Shop Apple Watch straps",
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-bands-og-image-20250328?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1743187434364"
    },
      {
        id: 2,
        name: " Magic runs in the family",
        title: "Explore app AirPods  models and find the best ones for you",
        info: "Buy",
        image: "https://www.livemint.com/lm-img/img/2024/09/10/1600x900/im-63675756_1725964487775_1725964616560.jpg"
    },
];


const ProductCard = ({ product }) => {
    return (
        <div className=' rounded-2xl w-full bg-gray-100'>
            <div className="w-auto px-10 h-160 bg-cover bg-center rounded-lg shadow-lg hover:scale-101 delay-100 hover:cursor-pointer" >

                <h2 className='text-[30px] pl-4 font-bold text-center pt-10' >{product.name}</h2>
                <p className='text-[20px] font-semibold pl-4 text-center'>{product.title}</p>
                <p className='text-[20px]  pl-4 text-center flex justify-center items-center text-blue-600 hover:underline pb-5'>{product.info}<ChevronRight size={20} /> </p>
                <img src={product.image} alt={product.name} className='h-100 '/>
            </div>


        </div>

    )
}


const WatchProduct4 = () => {
    return (
        <div className='h-auto flex flex-col mt-5 bg-white'>
            <div className='items-center justify-between flex'>
                <h1 className='text-6xl py-20 pl-10 font-semibold '>Apple Watch essentials.</h1>
                <button className='text-blue-600 hover:underline px-20 text-xl flex justify-center items-center hover:cursor-pointer'>All Apple Watch accessories<ChevronRight size={20} /></button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 mt-7 m-4'>
                {product.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div>
    )
}

export default WatchProduct4