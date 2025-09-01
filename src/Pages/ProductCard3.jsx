import React from 'react'
const product = [
    {
        id: 1,
        name: "iPhone 16 Pro Max Silicone Case with MagSafe – Peony",
        prices: "MRP ₹4900.00 (Incl. of all taxes)",
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MDGW4?wid=400&hei=400&fmt=jpeg&qlt=90&.v=Tkx3UkpiL1M0cTVYY2dtczRQRTJtUFlvYS9naDJJdU9KTWdGWjhKWFRmS1ZGS1d3SDlTVjBOQWIxNCszUkpvN3UreXJpb3VIcGlWM2ZmZTdPd3hXVXc"


    },
    {
        id: 2,
        name: "iPhone 16 Clear Case with MagSafe",
        prices: "MRP ₹4900.00 (Incl. of all taxes)",
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MA6A4?wid=400&hei=400&fmt=jpeg&qlt=90&.v=VTNNNjYvY0NlYW93ZHNFayszWjV6UFlvYS9naDJJdU9KTWdGWjhKWFRmS2FaWlZhYmRJcVJ0dFIzcGxndUF1TjRubXdSK2ZZdzhtdG9KOTZmd0ltdHc"
    },
    {
        id: 3,
        name: "Magic Keyboard for iPad Air 11 (M3) - US English",
        prices: "MRP ₹26900.00 (Incl. of all taxes)",
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MDFV4?wid=400&hei=400&fmt=jpeg&qlt=90&.v=Wk1DbFVUN0YreU5FTjVWbDQ5YnM5L1lvYS9naDJJdU9KTWdGWjhKWFRmTDhLQkF2SDExc0lNKzBUdldJWVhRNUtxa1VwVjVDenNjSENmZjdTMWN2UVE"
    },
    {
        id: 4,
        name: "46mm Tangerine Sport Band - M/L",
        prices: "MRP ₹4500.00 (Incl. of all taxes)",
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MDT54ref?wid=400&hei=400&fmt=jpeg&qlt=90&.v=Qkg1TndSOWJ4NmE5T1Ivd2FzT1RvOWVidldMUGJjaXo4L3NxcmNtKzZhU3Y0ZFQvV0F3cjdZL2VNNHBLRlA0UnNuUXdnbnArWHRnUU5aY2dBVkFhUVE"
    },

];

const ProductCard = ({ product }) => {
    return (
        <div className='bg-white rounded-2xl w-full pt-4 p-2 hover:scale-101'>
            <img src={product.image} alt={product.name} />
            <h2 className='text-[20px] font-semibold pl-4' >{product.name}</h2>
            <p className='text-[15px] pl-4'>{product.prices}</p>

        </div>

    )
}

const ProductCard3 = () => {
    return (
        <div className='h-auto flex flex-col mt-5'>
            <h1 className='text-gray-400 text-4xl pt-20 pl-10 font-semibold '><b className='text-black'>Accessories.</b>  Essentials that pair perfectly with your favourite devices.</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-7 m-4'>
                {product.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div>
    )
}

export default ProductCard3