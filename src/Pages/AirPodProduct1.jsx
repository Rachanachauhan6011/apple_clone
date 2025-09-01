import React from 'react'
import { ChevronRight } from 'lucide-react'
const product = [
    {
        id: 1,
        name: "AirPods 4",
        info: "The next evolution of sound and comfort.",
        price: "$129",
        image: "https://www.apple.com/v/airpods-4/f/images/overview/contrast/explore_airpods_4_closed__dgo55jp7r7gy_xlarge_2x.jpg"
    },
    {
        id: 2,
        name: "AirPods 4",
        info: "The next evolution of sound, comfort, and noise control.",
        price: "$179",
        image: "https://www.apple.com/v/airpods-4/f/images/overview/contrast/explore_airpods_4_opened__d1lvsgfc59me_xlarge_2x.jpg"
    },
    {
        id: 3,
        name: "AirPods Pro 2",
        info: "Pro-level Active Noise Cancellation and a breakthrough in hearing health.",
        price: "$249",
        image: "https://www.apple.com/v/airpods-max/i/images/overview/contrast/airpods_pro_white__e7dtczxw2lkm_large_2x.png"
    },
     {
        id: 4,
        name: "AirPods Max",
        info: "The colourful, all-screen iPad for the things you do every day.",
        price: "From ₹34900.00***",
        image: "https://www.apple.com/v/airpods-max/i/images/overview/contrast/airpods_max_midnight__ddy8oa1y3y4i_large_2x.png"
    },


];

const ProductCard = ({ product }) => {
    return (
        <div className=' rounded-2xl w-full'>
            <div className="w-60 h-auto p-4 bg-cover bg-center rounded-lg   hover:cursor-pointer  ">
                <img src={product.image} alt={product.name} className='hover:scale-101' />
                <h2 className='text-[30px] pl-4 pt-5 font-semibold text-center' >{product.name}</h2>
                <h2 className='text-[18px] pl-4 pt-2 font-semibold text-center' >{product.title}</h2>
                <h2 className='text-[20px] pl-4 pt-6  text-center' >{product.info}</h2>
                <p className='text-[20px] font-semibold pt-2 pl-4 text-center'>{product.price}</p>
                <div className='  pt-10  gap-10'>
                    <button className=' flex px-5 text-center py-1  pt-2 text-xl rounded-2xl items-center justify-center text-white bg-blue-600 cursor-pointer '>Buy</button>
                    <button className='text-blue-600 text-[20px] py-2 hover:underline cursor-pointer'>Learn more</button>
                    
                </div>
            </div>


        </div>

    )
}

const AirPodProduct1 = () => {
    return (
        <div className='h-auto  flex flex-col mt-15  '>
            <div className='items-center justify-between'>
                <h1 className='text-7xl py-20 pl-10 font-semibold text-center'>Which AirPods are right for you?</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center mx-60 gap-5 mt-7 m-4 '>
                {product.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
          
        </div>
    )
}

export default AirPodProduct1