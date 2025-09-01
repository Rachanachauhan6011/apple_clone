import React from 'react'
import MacProduct1 from './MacProduct1';
const product = [
        {
        id: 1,
        info:"Monthly payment otion available",
        heading:"Choose an easy way to finance with convenient payment options.",
       image:"https://www.apple.com/in/iphone/home/images/overview/incentive/icon_apple_card__gloa9krkj8mu_large_2x.png"
    },
    {
        id:2,
        info:"Save with Apple Trade In.",
        heading:"Get credit towards your next iPad when you trade in an eligible device at an Apple Store.6",
        image: "https://www.apple.com/v/iphone/home/cd/images/overview/incentive/icon_trade_in_2024_iphone__eeqv8d6hkt0m_large_2x.png"


    },
  
      {
        id: 3,
        info:"Shop with an iPad Specialist.",
        heading:"Shop one-to-one with a Specialist. Online or in a store.",
        image:"https://www.apple.com/v/iphone/home/cd/images/overview/incentive/icon_specialist_alt__e2zhfrjqy7o2_large_2x.png"
    },
      {
        id:4,
        info:"Get flexible delivery and e⁠a⁠s⁠y⁠ ⁠p⁠i⁠c⁠k⁠u⁠p⁠.",
        heading:"Get free delivery or pickup at your Apple Store.",
        image:"https://www.apple.com/v/iphone/home/cd/images/overview/incentive/icon_delivery__giivw45nosq6_large_2x.png"
    },
  

];

const ProductCard = ({product})=>{
    return (
          <div className='bg-white rounded-2xl w-full'>
     <div className="w-full h-80 bg-cover bg-center rounded-lg shadow-lg">
        <img src={product.image} alt={product.info} className='p-5'/>
    
      <h2 className='text-[30px] pl-4 pt-5 font-semibold' >{product.info}</h2>
            <p className='text-[20px]  text-gray-800 pl-4'>{product.heading}</p>
    </div>

            
          </div>
    
    )
}

const IPadProduct4 = () => {
  return (
     <div className='h-auto flex flex-col mt-5'>
        <h1 className=' text-7xl py-10 pl-10 font-semibold w-200'>Why Apple is the best place to buy iPad.</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-7 m-4'>
            {product.map((item)=>(
                <ProductCard key={item.id} product={item} />
            ))}
        </div>
     </div>
  )
}

export default IPadProduct4