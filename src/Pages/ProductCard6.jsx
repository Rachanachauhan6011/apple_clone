import React from 'react'
const product = [
    {
        id: 1,
        tagline: "EDUCATION",
        info: "Buy a new Mac or iPad with education savings.¹",
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-bts-edu-macbook-air-ipad-air-202503?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=bTAvUVhobndWL01MVC9aenBVVGo5YWZmUzB4a3czWENOTU1QWVJ1K01WWk5LOEsyMEhpRHE1T1EzSDFwQVpKVzF1WTFUcUFiTi80Y2ZLM2ZEQmtMcjJhUXpzSGp3b1lnNUp6M2lSQzZEVVBiYmVpOUU2RG04OHJUUjJybTZTeHFHaXB3VUEzd1huUnhZRnQ3eTQ1QUdB"


    },
];

const ProductCard = ({ product }) => {
    return (
        <div
            className="w-full h-130 bg-cover bg-center rounded-lg shadow-lg ml-20 hover:scale-101"
            style={{ backgroundImage: `url(${product.image})` }}
        >
            <p className='text-[12px] pl-5  pt-10'>{product.tagline}</p>
            <h1 className='text-[28px] font-bold pl-5'>{product.info}</h1>
        </div>

    )
}

const ProductCard6 = () => {
    return (
        <div className='h-auto flex flex-col '>
            <h1 className='text-gray-400 text-4xl pt-20 pl-10 font-semibold '><b className='text-black'>Special stores.</b> Exclusive savings for students and educators.</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7 m-4'>
                {product.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div>
    )
}

export default ProductCard6