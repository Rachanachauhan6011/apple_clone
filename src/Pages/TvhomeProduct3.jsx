import React from 'react'
import {ChevronRight} from 'lucide-react'
import TvhomeProduct1 from './TvhomeProduct1';
const product = [
  {
    id: 1,
    title: "Easily control your home from anywhere with your favourite devices.",
    info: "Learn more about the Home app",
    image: "https://www.apple.com/in/tv-home/images/overview/smart_control__dsa6v8m1pp0m_large_2x.jpg"
  },
  {
    id: 2,
    title: "Seamlessly connected entertainment in every room.",
    info: "Learn more about HomePod",
    image: "https://www.apple.com/v/tv-home/o/images/overview/smart_connect__d8o6agoqfh0m_large_2x.jpg"
  },

  {
    id: 3,
    title: "PAll with the security and privacy of Apple.",
    info: "Learn more about Privacy",
    image: "https://www.apple.com/in/tv-home/images/overview/security_and_privacy__bzlguj2x29jm_large_2x.jpg"
  },


];

const ProductCard = ({ product }) => {
  return (
    <div className='bg-white rounded-2xl w-full text-black'>
      <div
        className="w-full h-140 rounded-lg shadow-lg hover:scale-101 delay-100 hover:cursor-pointer ">
        <h2 className='text-[30px] pl-4 pt-5 font-semibold text-center' >{product.title}</h2>
         <button className='text-[20px] text-blue-600 hover:underline flex cursor-pointer items-center justify-center  py-5 pl-30'>{product.info} <ChevronRight size={20} /></button>
        <img src={product.image} alt={product.name}  />
      </div>


    </div>

  )
}

const TvhomeProduct3 = () => {
  return (
    <div className='h-auto flex flex-col mt-5 bg-gray-100 '>
      <h1 className='text-7xl py-20 pl-10 font-semibold text-center px-30'>Every reason to turn your house into a smart home.</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7 m-4'>
        {product.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  )
}

export default TvhomeProduct3