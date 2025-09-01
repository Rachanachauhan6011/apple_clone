import React from 'react'
const product = [
  {
    id: 1,
    title: "Active Noise Cancellation",
    name: "Control what you hear. And what you don’t.",
    image: "https://www.apple.com/v/airpods/x/images/overview/consider/card_noise_cancellation__bcl69t06noci_large_2x.jpg"
  },
  {
    id: 2,
    title: "Personalized Spatial Audio",
    name: "Immersive sound. Fine‑tuned to you.",
    image: "https://www.apple.com/v/airpods/x/images/overview/consider/card_spatial_audio__uga42js3h4ya_large_2x.jpg"
  },

  {
    id: 3,
    title: "Hearing Health",
    name: "Check, aid, and help protect your hearing.1",
    image: "https://www.apple.com/v/airpods/x/images/overview/consider/card_hearing_health__ss2uxyv3j5m6_large_2x.jpg"

  },
  {
    id: 4,
    title: "Magical Experience",
    name: "Simply effortless.",
    image: "https://www.apple.com/v/airpods/x/images/overview/consider/card_iphone__c7gcuw15pxiu_large_2x.jpg"
  },


];

const ProductCard = ({ product }) => {
  return (
    <div className='bg-white rounded-2xl w-full text-white'>
      <div
        className="w-full h-180 bg-cover bg-center rounded-lg shadow-lg hover:scale-101 delay-100 hover:cursor-pointer "
        style={{ backgroundImage: `url(${product.image})` }}
      >
        <h2 className='text-[18px] pl-4 pt-5 font-semibold' >{product.title}</h2>
        <p className='text-[25px] font-bold pl-4'>{product.name}</p>
      </div>


    </div>

  )
}

const AirPodProduct2 = () => {
  return (
    <div className='h-auto flex flex-col mt-5 bg-white '>
      <h1 className='text-6xl py-20 pl-10 font-semibold text-center'>Get to know AirPods.</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-7 m-4'>
        {product.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  )
}

export default AirPodProduct2