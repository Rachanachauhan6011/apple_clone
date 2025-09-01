import React from 'react'
import { ChevronRight } from 'lucide-react'
const product = [
    {
        id: 1,
        name: "iPad Pro",
        info: "The ultimate iPad experience with the most advanced technology.",
        price: "From ₹99900.00***",
        image: "https://www.apple.com/assets-www/en_WW/ipad/product_tile/xlarge/ipad_pro_1df5448cd_2x.png"
    },
    {
        id: 2,
        name: "iPad Air",
        info: "Serious performance in a thin and light design.",
        price: "From ₹59900.00***",
        image: "https://www.apple.com/assets-www/en_WW/ipad/product_tile/xlarge/ipad_air_6ec53cb36_2x.png"
    },
    {
        id: 3,
        name: "iPad",
        info: "The colourful, all-screen iPad for the things you do every day.",
        price: "From ₹34900.00***",
        image: "https://www.apple.com/assets-www/en_WW/ipad/product_tile/xlarge/ipad_11th_gen_7433e46d0_2x.png"
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

const IPadProduct2 = () => {
    return (
        <div className='h-auto flex flex-col mt-15  '>
            <div className='items-center justify-between flex'>
                <h1 className='text-6xl py-20 pl-10 font-semibold '>Explore the line-up.</h1>
                <button className='text-blue-600 hover:underline px-20 text-xl flex justify-center items-center hover:cursor-pointer'>Compare all models<ChevronRight size={20} /></button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7 m-4 '>
                {product.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
            <div className='w-full h-auto border-t-1 border-gray-300 pl-10 grid md:grid-cols-2 lg:grid-cols-3'>
                <div className='w-auto px-5 h-auto items-center text-center justify-between  mx-15'>

                    <h1 className='text-[30px] font-semibold'>33.02 cm or 28.22 cm</h1>
                    <p className='text-xs text-gray-600'>(13″ or 11″) Ultra Retina XDR display4 ProMotion technology P3 wide colour Nano-texture display glass option on 1TB and 2TB models</p>
                    <img src="https://www.apple.com/assets-www/en_WW/ipad/tout_table/small/chip.m4_elevated_3dd9db733.svg" alt="" className='pl-35 pt-10 ' />
                    <p className='text-xs text-gray-600'>M4 chip</p>
                    <img src="https://www.apple.com/assets-www/en_WW/mac/tout_table/apple.intelligence_elevated_f063342ae.svg" alt="" className='pl-32 pt-10' />
                    <p className='text-xs text-gray-600'>Apple Intelligence1</p>
                    <img src="https://www.apple.com/assets-www/en_WW/ipad/tout_table/small/ipadpro13.gen7.camera_elevated_8b1ecd6e5.svg" alt="" className='pl-32 pt-10' />
                    <p className='text-xs text-gray-600'>12MP Wide camera</p>
                    <p className='text-xs text-gray-600'>4K video, ProRes</p>
                    <img src="https://www.apple.com/assets-www/en_WW/ipad/tout_table/small/ipad.front.camera.landscape_elevated_3a58a988e.svg" alt="" className='pl-32 pt-10' />
                    <p className='text-xs text-gray-600'>Landscape 12MP Center Stage camera</p>
                    <p className='text-xs text-gray-600'>TrueDepth camera system</p>
                    <img src="https://www.apple.com/assets-www/en_WW/ipad/tout_table/small/applepencil.vertical.gen2.gen3_elevated_cf05e9268.svg" alt="" className='pl-32 pt-10' />
                    <p className='text-xs text-gray-600'>Supports Apple Pencil Pro</p>
                    <p className='text-xs text-gray-600'>Supports Apple Pencil (USB-C)</p>
                    <img src="https://www.apple.com/assets-www/en_WW/ipad/tout_table/small/magickeyboard.m4.ipad_elevated_c74c0cc60.svg" alt="" className='pl-32 pt-10' />
                    <p className='text-xs text-gray-600'>Supports Magic Keyboard for iPad Pro</p>
                </div>
                <div className='w-auto  h-auto items-center text-center justify-between  '>
                    <h1 className='text-[30px] font-semibold'>32.78 cm or 27.59 cm</h1>
                    <p className='text-xs text-gray-600 px-20'>(13″ or 11″) Liquid Retina display4</p>
                    <p className='text-xs text-gray-600 px-20'>(13″ or 11″)P3 wide colour</p>
                    <img src="https://www.apple.com/assets-www/en_WW/ipad/tout_table/small/chip.m3_elevated_8df677ac2.svg" alt="" className='pl-55 pt-10' />
                    <p className='text-xs text-gray-600'>M3 chip</p>
                    <img src="https://www.apple.com/assets-www/en_WW/mac/tout_table/apple.intelligence_elevated_f063342ae.svg" alt="" className='pl-55 text-center pt-10' />
                    <p className='text-xs text-gray-600'>Apple Intelligence1</p>
                    <img src="https://www.apple.com/assets-www/en_WW/ipad/tout_table/small/ipadair13.gen6.camera_elevated_a660a9722.svg" alt="" className='pl-60 pt-10' />
                    <p className='text-xs text-gray-600'>12MP Wide camera</p>
                    <p className='text-xs text-gray-600'>4K video</p>
                    <img src="https://www.apple.com/assets-www/en_WW/ipad/tout_table/small/ipad.front.camera.landscape_elevated_3a58a988e.svg" alt="" className='pl-60 pt-10' />
                    <p className='text-xs text-gray-600'>Landscape 12MP Center Stage camera</p>
                    <img src="https://www.apple.com/assets-www/en_WW/ipad/tout_table/small/applepencil.vertical.gen2.gen3_elevated_cf05e9268.svg" alt="" className='pl-60 pt-10' />
                    <p className='text-xs text-gray-600'>Supports Apple Pencil Pro</p>
                    <p className='text-xs text-gray-600'>Supports Apple Pencil (USB-C)</p>
                    <img src="https://www.apple.com/assets-www/en_WW/ipad/tout_table/small/magickeyboard.m4.ipad_elevated_c74c0cc60.svg" alt="" className='pl-60 pt-10' />
                    <p className='text-xs text-gray-600'>Supports Magic Keyboard for iPad Air</p>

                </div>
                <div className='w-auto  h-auto items-center text-center justify-center '>
                    <h1 className='text-[30px] font-semibold'>27.59 cm</h1>
                    <p className='text-xs text-gray-600 px-20'>(11″) Liquid Retina display4</p>
                    <p className='text-xs text-gray-600 px-20'>(11″)sRGB colour</p>
                    <img src="https://www.apple.com/assets-www/en_WW/ipad/tout_table/small/chip.a16_elevated_028264261.svg" alt="" className='pl-55 pt-10' />
                    <p className='text-xs text-gray-600'>AA16 chip</p>
                    <img src="https://www.apple.com/assets-www/en_WW/mac/tout_table/apple.intelligence_elevated_f063342ae.svg" alt="" className='pl-55 text-center pt-10' />
                    <p className='text-xs text-gray-600'>Apple Intelligence1</p>
                    <img src="https://www.apple.com/assets-www/en_WW/ipad/tout_table/small/ipadair13.gen6.camera_elevated_a660a9722.svg" alt="" className='pl-60 pt-10' />
                    <p className='text-xs text-gray-600'>12MP Wide camera</p>
                    <p className='text-xs text-gray-600'>4K video</p>
                    <img src="https://www.apple.com/assets-www/en_WW/ipad/tout_table/small/ipad.front.camera.landscape_elevated_3a58a988e.svg" alt="" className='pl-60 pt-10' />
                    <p className='text-xs text-gray-600'>Landscape 12MP Center Stage camera</p>
                    <img src="https://www.apple.com/assets-www/en_WW/ipad/tout_table/small/applepencil.vertical.gen2.gen3_elevated_cf05e9268.svg" alt="" className='pl-60 pt-10' />
                    <p className='text-xs text-gray-600'>Supports Apple Pencil (USB-C)</p>
                    <p className='text-xs text-gray-600'>Supports Apple Pencil (1st generation)5</p>
                    <img src="https://www.apple.com/assets-www/en_WW/ipad/tout_table/small/magickeyboard.m4.ipad_elevated_c74c0cc60.svg" alt="" className='pl-60 pt-10' />
                    <p className='text-xs text-gray-600'>Supports Magic Keyboard Folio</p>

                </div>

            </div>
        </div>
    )
}

export default IPadProduct2