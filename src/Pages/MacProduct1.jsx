import React from 'react'
const product = [
  {
    id: 1,
    title: "Performance and Battery Life",
    name: "Go Fast.Go Far",
    image: "https://www.apple.com/v/mac/home/cb/images/overview/consider/mac_performance__dh5hyac1zf8m_xlarge.jpg"
  },
  {
    id: 2,
    title: "Compatiblity",
    name: "Mac runs your favourite apps",
    image: "https://www.apple.com/v/mac/home/cb/images/overview/consider/mac_compatibility__cu59oukz81ci_xlarge.jpg"
  },

  {
    id: 3,
    title: "Durablity",
    name: "Built to stand the test of time",
    image: "https://www.apple.com/v/mac/home/cc/images/overview/consider/mac_durability__epiwcuk7zkeq_xlarge.jpg"

  },
  {
    id: 4,
    title: "Privacy and Security",
    name: "Your business is nobody else's",
    image: "https://www.apple.com/v/mac/home/cg/images/overview/consider/mac_security__gfwda10khdym_xlarge.jpg"
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

const MacProduct1 = () => {
  return (
    <div className='h-auto flex flex-col mt-5 bg-white '>
      <h1 className='text-6xl py-20 pl-10 font-semibold '>Get to know Mac.</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-7 m-4'>
        {product.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  )
}

export default MacProduct1