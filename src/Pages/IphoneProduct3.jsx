import React from 'react'
import MacProduct1 from './MacProduct1';
const product = [
    {
        id: 1,
        info: "Save with Apple Trade In.",
        heading: "Get ₹16000.00–₹62200.00 in credit towards iPhone 16 or iPhone 16 Pro when you trade in iPhone 12 or higher.13",
        image: "https://www.apple.com/v/iphone/home/cd/images/overview/incentive/icon_trade_in_2024_iphone__eeqv8d6hkt0m_large_2x.png"
    },
    {
        id: 2,
        info: "Monthly payment options are available.",
        heading: "Choose the easy way to finance with convenient monthly payment options.",
        image: "https://www.apple.com/in/iphone/home/images/overview/incentive/icon_apple_card__gloa9krkj8mu_large_2x.png"


    },

    {
        id: 3,
        info: "Get flexible delivery and easy pickup.",
        heading: "Get free delivery or pickup at your Apple Store.",
        image: "https://www.apple.com/v/iphone/home/cd/images/overview/incentive/icon_delivery__giivw45nosq6_large_2x.png"
    },
    {
        id: 4,
        info: "Join an online Personal Setup session.",
        heading: "Talk one-to-one with a Specialist to set up your iPhone and discover new features.",
        image: "https://www.apple.com/v/iphone/home/cd/images/overview/incentive/icon_person__rhg3t7p8xpuq_large_2x.png"
    },


];

const ProductCard = ({ product }) => {
    return (
        <div className='bg-white rounded-2xl w-full'>
            <div className="w-full h-100 bg-cover bg-center rounded-lg shadow-lg">
                <img src={product.image} alt={product.info} className='p-5'/>
                <h2 className='text-[30px] pl-4 pt-5 font-semibold' >{product.info}</h2>
                <p className='text-[20px]  text-gray-800 pl-4'>{product.heading}</p>
            </div>


        </div>

    )
}

const IphoneProduct3 = () => {
    return (
        <div className='h-auto flex flex-col mt-5'>
            <h1 className=' text-7xl py-10 pl-10 font-semibold w-200'>Why Apple is the best place to buy iPhone.</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-7 m-4'>
                {product.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div>
    )
}

export default IphoneProduct3