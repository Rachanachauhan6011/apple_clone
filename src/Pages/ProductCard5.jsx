import React from 'react'
const product1 = [
    {
        id: 1,
        tagline: "Apple Intelligence",
        info: "Write, express yourself and get things done effortlessly.∆",
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-apple-intelligence-202503_GEO_IN?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=SFNxMjRYSTFLdjBJZG1UYjBKRUNDalZCM0g0MTRQL0NONjZoQUpUNEpyYmhneHZ1c05HY3JPVWptTEVEdXNQMENJWGJVR3BNa0NheTNxZUJ3blJNRk1mSGN3NTUxbDRHZDZXK1V3b1o4a1E2RHdqelF6Qlg1YkVIVk96WFZWanZRRXB6YUhNcms5Z1pYZXdkbUhocnBn"


    },
];
const product = [
    {
        id: 2,
        tagline: "APPLE STORE APP",
        name: "Let them know it’s on the way.",
        title: "Send a digital gift message that’s easy to schedule, fun to give and fun to get.",
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-mothers-day-gifting-202504?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=ODZqNTg1VE5NZ3RHb1Y5anVuNWU0LytmcDNHN2dUdHNNTjJaTnEycnV2WFJjSU5pUVVGNEFDMTFiYjdEOUFsSVVrc1JZVkQ0S2s0elFpK2Y1K2lCS1NsOG1PN3FBRzN3cEphZ2ZrZllTNFpBaVR3VWVpRHAvdjJOb2ozaDYzVUc"
    },
    {
        id: 3,
        name: "We’ve got you covered.",
        title: "AppleCare+ now comes with unlimited repairs for accidental damage protection.",
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-applecare-202503?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=SFNxMjRYSTFLdjBJZG1UYjBKRUNDaXRXOGV1M2ZHcDVxZzhMK2cxK3dsTUloZHRRYWt5UUpyTGVwNEhDZEV3VXg4ZHpEbm5XWGdaM3BiNVRDaG55Ukc2ZjdMSUNqeUNFYjF1MU1sS2U0a3E1dDgvV3BhU1hoSzFPUEZjam5HQ2g"
    },
];

const ProductCard1 = ({ product1 }) => {
    return (
        <div
            className="w-full h-auto bg-cover bg-center rounded-lg shadow-lg"
            style={{ backgroundImage: `url(${product1.image})` }}
        >
            <p className='text-[30px] font-bold pl-4 pt-12 bg-gradient-to-r from-blue-600 via-pink-500 to-red-600 bg-clip-text text-transparent'>{product1.tagline}</p>
            <p className='text-[30px] font-bold pl-4'>{product1.info}</p>
        </div>

    )
}
const ProductCard = ({ product }) => {
    return (
        <div
            className="w-full h-130 bg-cover bg-center rounded-lg shadow-lg hover:scale-101"
            style={{ backgroundImage: `url(${product.image})` }}
        >
            <p className='text-[10px] pl-4  pt-10'>{product.tagline}</p>
            <h1 className='text-[28px] font-bold pl-4'>{product.name}</h1>
            <p className='text-[18px] pl-4'>{product?.title}</p>
        </div>

    )
}

const ProductCard5 = () => {
    return (
        <div className='h-auto flex flex-col'>
            <h1 className='text-gray-400 text-4xl pt-20 pl-10 font-semibold '><b className='text-black'>The Apple experience.</b> Do even more with Apple products and services.</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7 m-4'>
                {product1.map((item1) => (
                    <ProductCard1 key={item1.id} product1={item1} />
                ))}
                {product.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div>
    )
}

export default ProductCard5