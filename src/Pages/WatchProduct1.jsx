import React from 'react'
const product = [
  {
    id: 1,
    title: "Fitness",
    name: "Every moves counts",
    image: "https://www.apple.com/v/apple-watch-series-10/d/images/overview/fitness/fitness__e9xaztylx5e2_xlarge_2x.jpg"
  },
  {
    id: 2,
    title: "Connectivity",
    name: "The right call for staying in touch",
    image: "https://www.apple.com/v/apple-watch-series-10/d/images/overview/finishes-titanium/watch_foil_endframe__bq8v659ifzn6_xlarge.jpg"
  },

  {
    id: 3,
    title: "Apple Watch Ultra 2",
    name: "The ulimite sports and adventure watch",
    image: "https://www.apple.com/in/apple-watch-ultra-2/images/overview/cycling/lifestyle_cycling__gnze7hivbhyu_large_2x.jpg"

  },
  {
    id: 4,
    title: "Persionalisation",
    name: "Make it you-nique",
    image: "https://image.telanganatoday.com/wp-content/uploads/2023/08/Apple-Watch-cardio-fitness-notifications-aid-in-detecting-significant-heart-issues_V_jpg--442x260-4g.webp?sw=412&dsz=442x260&iw=392&p=false&r=2.625"
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

const WatchProduct1 = () => {
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

export default WatchProduct1