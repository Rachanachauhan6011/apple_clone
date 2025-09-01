import React from 'react'
const product = [
  {
    id: 1,
    title: "Apple Intelligence",
    name: "AI-opening possibilities.1",
    image: "https://www.apple.com/v/iphone/home/cd/images/overview/consider/apple_intelligence__gbh77cvflkia_xlarge_2x.jpg"
  },
  {
    id: 2,
    title: "Cutting-Edge Cameras",
    name: "Picture your best photos and videos.",
    image: "https://www.apple.com/v/iphone/home/cd/images/overview/consider/camera__exi2qfijti0y_xlarge_2x.jpg"
  },

  {
    id: 3,
    title: "Chip and Battery Life",
    name: "Fast that lasts.",
    image: "https://www.apple.com/v/iphone/home/cd/images/overview/consider/battery__2v7w6kmztvm2_xlarge_2x.jpg"

  },
  {
    id: 4,
    title: "Personalise Your iPhone",
    name: "Make it you.Through and through.",
    image: "https://www.apple.com/in/iphone/home/images/overview/consider/personalize__dwg8srggrbo2_xlarge_2x.jpg"
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

const IphoneProduct1 = () => {
  return (
    <div className='h-auto flex flex-col mt-5 bg-white '>
      <h1 className='text-6xl py-20 pl-10 font-semibold '>Get to know iPad.</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-7 m-4'>
        {product.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  )
}

export default IphoneProduct1