import React from 'react'
import { ChevronRight } from 'lucide-react'
const product = [
    {
        id: 1,
        name: "iPhone accessories",
        title: "Explore colourful cases, USB‑C power adapters,MagSafe accessories and more.",
        info: "Shop iPhone accessories",
        image: "https://www.apple.com/in/iphone/home/images/overview/essentials/magsafe__dac2joyve8wi_xlarge_2x.jpg"
    },
      {
        id: 2,
        name: "AirTag ",
        title: "Attach one to your keys. Put another in your backpack. If they’re misplaced, just use the Find My app.",
        info: "Buy",
        image: "https://www.apple.com/v/iphone/home/cd/images/overview/essentials/airtag__furx99ax8rm2_xlarge_2x.jpg"
    },
];


const ProductCard = ({ product }) => {
    return (
        <div className=' rounded-2xl w-full bg-gray-100'>
            <div className="w-auto px-10 h-160 bg-cover bg-center rounded-lg shadow-lg hover:scale-101 delay-100 hover:cursor-pointer" >

                <h2 className='text-[30px] pl-4 font-bold text-center pt-10' >{product.name}</h2>
                <p className='text-[20px] font-semibold pl-4 text-center'>{product.title}</p>
                <p className='text-[20px]  pl-4 text-center flex justify-center items-center text-blue-600 hover:underline pb-5'>{product.info}<ChevronRight size={20} /> </p>
                <img src={product.image} alt={product.name} />
            </div>


        </div>

    )
}


const WatchProduct4 = () => {
    return (
        <div className='h-auto flex flex-col mt-5 bg-white'>
            <div className='items-center justify-between flex'>
                <h1 className='text-6xl py-20 pl-10 font-semibold '>iPhone essentials.</h1>
                <button className='text-blue-600 hover:underline px-20 text-xl flex justify-center items-center hover:cursor-pointer'>All iPhone accessories<ChevronRight size={20} /></button>
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