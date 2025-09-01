import React from 'react'
import { ChevronRight } from 'lucide-react'
const product = [
    {
        id: 1,
        name: "MacBook Pro 13″ and 15″",
        title: "M4 chip",
        info: "Strikingly thin and fast so you can work, play or create anywhere.",
        price: "From ₹99900.00***",
        image: "https://www.apple.com/assets-www/en_WW/mac/product_tile/xlarge/mba_13_15_e70345aaa_2x.png"
    },
    {
        id: 2,
        name: "MacBook Pro 14″ and 16″",
        info: "The most advanced Mac laptops for demanding workflows.",
        title: "M4, M4 Pro or M4 Max chip",
        price: "From ₹169900.00***",
        image: "https://www.apple.com/assets-www/en_WW/mac/product_tile/xlarge/mbp_14_16_276cf110f_2x.png"
    },


];

const ProductCard = ({ product }) => {
    return (
        <div className=' rounded-2xl w-full'>
            <div className="w-full h-auto p-4 bg-cover bg-center rounded-lg   hover:cursor-pointer  ">
                <img src={product.image} alt={product.name} className='hover:scale-101' />
                <h2 className='text-[30px] pl-4 pt-5 font-semibold text-center' >{product.name}</h2>
                <h2 className='text-[18px] pl-4 pt-2 font-semibold text-center' >{product.title}</h2>
                <h2 className='text-[20px] pl-4 pt-6  text-center' >{product.info}</h2>
                <p className='text-[20px] font-semibold pt-2 pl-4 text-center'>{product.price}</p>
                <div className='items-center flex pt-10 text-center gap-10 pl-30'>
                    <button className='bg-blue-600 text-[20px] text-white rounded-4xl py-2 px-3 hover:bg-blue-500'>Learn more</button>
                    <button className='flex items-center justify-center text-xl text-blue-600 cursor-pointer hover:underline'>Buy<ChevronRight size={20} /></button>
                </div>
            </div>


        </div>

    )
}

const MacProduct2 = () => {
    return (
        <div className='h-auto flex flex-col mt-15  '>
            <div className='items-center justify-between flex'>
                <h1 className='text-6xl py-20 pl-10 font-semibold '>Explore the line-up.</h1>
                <button className='text-blue-600 hover:underline px-20 text-xl flex justify-center items-center hover:cursor-pointer'>Compare all models<ChevronRight size={20} /></button>
            </div>
            <div className='ml-10 mb-10'>
                <button className=' h-auto w-auto p-1  rounded-4xl bg-gray-200 font-semibold text-xl'>
                    <button className='px-2 bg-black rounded-3xl text-white h-10 w-25'>Laptops</button>
                    <button className='px-4'>Desktops</button>
                    <button className='px-4'>Displays</button>
                </button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7 m-4 '>
                {product.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
            <div className='max-w-3/4 h-auto border-t-1 border-gray-300 pl-10 grid md:grid-cols-1 lg:grid-cols-2 pt-10 px-15'>
                <div className='w-auto px-15 h-auto items-center text-center justify-between  mx-20'>

                    <h1 className='text-[30px] font-semibold'>34.46 cm or 38.91 cm</h1>
                    <p className='text-xs text-gray-600'>(13.6″ or 15.3″) Liquid Retina display with 500 nits of brightness and support for 1 billion colours9</p>
                    <img src="https://www.apple.com/assets-www/en_WW/mac/tout_table/chip.m4.fill_elevated_0b86b1a9b.svg" alt="" className='pl-25 pt-10' />
                    <p className='text-xs text-gray-600'>Apple M4 chip</p>
                    <img src="https://www.apple.com/assets-www/en_WW/mac/tout_table/apple.intelligence_elevated_f063342ae.svg" alt="" className='pl-20 pt-10' />
                    <p className='text-xs text-gray-600'>Apple Intelligence1</p>
                    <p className='text-xs text-gray-600 pt-10'>Up to</p>
                    <p className='text-2xl text-black font-semibold'>18 hours</p>
                    <p className='text-xs text-gray-600'>battery life10</p>
                    <p className='text-2xl text-black font-semibold pt-10'>4 ports</p>
                    <p className='text-xs text-gray-600'>2x Thunderbolt 4 (USB‑C), headphone jack, MagSafe</p>
                    <p className='text-2xl text-black font-semibold pt-10'>1.24 kg or 1.51 kg(2.7 lb. or 3.3 lb.)</p>
                    <p className='text-xs text-gray-600'>Weight11</p>
                </div>
                <div className='w-auto  h-auto items-center text-center justify-center mx-20  '>
                    <h1 className='text-[30px] font-semibold'>34.46 cm or 38.91 cm</h1>
                    <p className='text-xs text-gray-600 px-20'>(14.2″ or 16.2″) Liquid Retina XDR display with up to 1,600 nits peak brightness; 10,00,000:1 contrast ratio; and up to 120Hz refresh rates9</p>
                    <img src="https://www.apple.com/assets-www/en_WW/mac/tout_table/chip.m4.and.chip.m4pro.and.chip.m4max.fill_elevated_babed04f2.svg" alt="" className='pl-30 pt-10' />
                    <p className='text-xs text-gray-600'>Apple M4, M4 Pro or M4 Max chip</p>
                    <img src="https://www.apple.com/assets-www/en_WW/mac/tout_table/apple.intelligence_elevated_f063342ae.svg" alt="" className='pl-40 text-center pt-10' />
                    <p className='text-xs text-gray-600'>Apple Intelligence1</p>
                    <p className='text-xs text-gray-600 pt-10'>Up to</p>
                    <p className='text-2xl text-black font-semibold'>24 hours</p>
                    <p className='text-xs text-gray-600'>battery life10</p>
                    <p className='text-2xl text-black font-semibold pt-10'>7 ports</p>
                    <p className='text-xs text-gray-600'>3x Thunderbolt 4 (USB‑C) or 3x Thunderbolt 5 (USB‑C), HDMI, SDXC, headphone jack, MagSafe</p>
                    <p className='text-2xl text-black font-semibold pt-10'>1.55 kg or 2.14 kg(3.40 lb. or 4.71 lb.)</p>
                    <p className='text-xs text-gray-600'>Weight11</p>
                </div>

            </div>
        </div>
    )
}

export default MacProduct2