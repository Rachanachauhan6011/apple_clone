import React from 'react'
const product = [
  {
    id: 1,
    title: "Productivity",
    name: "Your workplace can be any place.",
    image: "https://www.apple.com/assets-www/en_ZA/ipad/feature_card/large/fc_productivity_6b8e4545b_2x.jpg"
  },
  {
    id: 2,
    title: "Apple Pencil",
    name: "Dream it up. Jot it down.",
    image: "https://coolboxpe.vtexassets.com/arquivos/ids/441670/Apple-Pencil-Pro-blanco_1.jpg.jpg?v=638797283952670000"
  },

  {
    id: 3,
    title: "Creativity",
    name: "Take your inner artist out ant about.",
    image: "https://www.apple.com/assets-www/en_WW/ipad/feature_card_boc/large/creativity_supplies_df2c76115_2x.jpg"

  },
  {
    id: 4,
    title: "Entertainment",
    name: "Kick back. Turn in. Game on.",
    image: "https://image.benq.com/is/image/benqco/car-racing-kv?$ResponsivePreset$"
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

const IPadProduct1 = () => {
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

export default IPadProduct1